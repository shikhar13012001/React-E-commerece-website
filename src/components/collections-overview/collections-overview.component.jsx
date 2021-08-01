import React from 'react'
import { connect}  from 'react-redux'
import './collections-overview.styles.scss'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector'
import {createStructuredSelector} from 'reselect'
 import PreviewCollection from '../preview-collection/preview-collection.jsx'
const CollectionsOverview =({collections})=>{
   return( <div className='collections-overview'>
        {
             collections.map(({id, ...otherCollectionProps}) =>{
              return(  <PreviewCollection key={id}  {...otherCollectionProps}></PreviewCollection>)
            })
        }
    </div>)
}
const mapStateToProps= createStructuredSelector({
    collections:selectCollectionsForPreview
}) 
export default connect(mapStateToProps)(CollectionsOverview)