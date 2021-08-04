import React from "react";
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.actions'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CategoryPage from '../collection/collection.component';
import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
import withSpinner from "../../components/with-spinned/with-spinner.component";

const CollectionsOverviewWithSpinner=withSpinner(CollectionsOverview);
const CategoryPageWIthSpinner=withSpinner(CategoryPage);
class ShopPage extends React.Component {
   state={
       loading:true
   }
    unsubscribeFromSnapshot=null;
    componentDidMount(){
        const {updateCollections}=this.props;

const collectionRef=firestore.collection('collections');
 
 collectionRef.get().then(snapshot =>{
 
   const CollectionsMap=  convertCollectionsSnapshotToMap(snapshot);
   console.log(CollectionsMap);
   updateCollections(CollectionsMap);
   this.setState({loading:false});
 })
    }
    render(){ 
        const {match}=this.props;
        const {loading}=this.state;
        return(
            <div className="shop-page">
      
            <Route exact path={`${match.path}`} render={(props)=><CollectionsOverviewWithSpinner isLoading={loading} {...props}/> }/>
            <Route path={`${match.path}/:collectionId`} render={ (props)=><CategoryPageWIthSpinner isLoading={loading} {...props}/>}/>
            </div>
        )
}
}
const mapDispatchToProps=dispatch=>({
    updateCollections:collectionsMap=>dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage)