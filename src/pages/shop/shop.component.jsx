import React from 'react';
import CollectionOverview from "../../components/collection-overview/collection-overview";
import {Route} from "react-router-dom";
import Category from "../Category/category.component";

class ShopPage extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div className='shop-page'>
                <Route exact path={`${this.props.match.path}`} component={CollectionOverview} />
                <Route exact path={`${this.props.match.path}/:categoryId`} component={Category} />
            </div>
        );
    }
}

export default ShopPage;
