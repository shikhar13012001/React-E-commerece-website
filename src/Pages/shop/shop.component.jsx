import React from "react";
import SHOP_DATA from "./shop.data.js";
import PreviewCollection from "../../components/preview-collection/preview-collection.jsx";
class ShopPage extends React.Component{
    constructor(props){
        super(props);
  this.state={
      collections:SHOP_DATA
  }
    }
    render()
    {
        return(
        <div className="shop-page">
            {
            this.state.collections.map(({id, ...otherCollectionProps}) =>{
              return(  <PreviewCollection key={id}  {...otherCollectionProps}></PreviewCollection>)
            })
        }
        </div>
        )
    }
}
export default ShopPage