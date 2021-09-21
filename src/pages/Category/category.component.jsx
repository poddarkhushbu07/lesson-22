import React from 'react';
import {selectCollection} from "../../redux/shop/shop.selectors";
import {connect} from "react-redux";
import CollectionPreview from "../../components/collection-preview/collection-preview";

const Category = ({match, collection}) => {
    console.log(match.params.categoryId);
    console.log(collection);
    return (
        <div className='category'>
            <CollectionPreview title={match.params.categoryId} items={collection ? collection.items : []}></CollectionPreview>
        </div>
    )
}


/*const makeMapStateToProps = (state, ownProps) => {
    const getCollection = selectCollection(ownProps.match.params.categoryId)*/
    const mapStateToProps = (state, ownProps) => {
        return {
            collection: selectCollection(ownProps.match.params.categoryId)(state)       }
    }
/*}*/
/*const mapStateToProps = (state, ownProps) => {
    return {

    }
}*/
export default connect(mapStateToProps)(Category);
