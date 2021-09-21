import React from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview';
import {createStructuredSelector} from "reselect";
import {selectCollections} from "../../redux/shop/shop.selectors";
import {connect} from "react-redux";

class CollectionOverview extends React.Component {

    render() {

        return (
            <div className='shop-page'>
                {this.props.collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({collections: selectCollections})
export default connect(mapStateToProps)(CollectionOverview);
