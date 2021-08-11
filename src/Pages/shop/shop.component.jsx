import React from "react";
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import { selectIsCollectionFetching,selectCollectionIsLoaded } from "../../redux/shop/shop.selector";
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CategoryPage from '../collection/collection.component';
import withSpinner from "../../components/with-spinned/with-spinner.component";

const CollectionsOverviewWithSpinner=withSpinner(CollectionsOverview);
const CategoryPageWIthSpinner=withSpinner(CategoryPage);
class ShopPage extends React.Component {
 
    componentDidMount(){
     const {fetchCollectionsStartAsync}=this.props;
     fetchCollectionsStartAsync();
    }
    render(){ 
        const {match,isCollectionFetching,IsCollectionLoaded}=this.props;
        
           return(
            <div className="shop-page">
      
            <Route exact path={`${match.path}`} render={(props)=><CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props}/> }/>
            <Route path={`${match.path}/:collectionId`} render={ (props)=><CategoryPageWIthSpinner isLoading={!IsCollectionLoaded} {...props}/>}/>
            </div>
        )
}
}

const mapStateToProps =createStructuredSelector({
    isCollectionFetching:selectIsCollectionFetching,
   IsCollectionLoaded:selectCollectionIsLoaded
})
const mapDispatchToProps=dispatch=>({
 fetchCollectionsStartAsync:()=>dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage)