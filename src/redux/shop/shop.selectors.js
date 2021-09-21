import {createSelector} from 'reselect';
import memoize from 'lodash.memoize'

const selectShop = state => state.shop;
const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    women: 4, men: 5
}

export const selectCollections = createSelector([selectShop], shop => shop.collections)
// as param is dynamic here we have to manually memoize
export const selectCollection =
    memoize((param) => {
        return createSelector([selectCollections], (collections) => {

                return collections.find((it) => {
                    console.log('qq', it);
                    return it.id === COLLECTION_ID_MAP[param]
                })
            }
        )
    })




