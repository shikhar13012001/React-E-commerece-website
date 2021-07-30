import React from 'react';
import './checkout-item.styles.scss';
import {ReactComponent as CloseBtn} from '../../assests/close-btn.svg'
const  CheckoutItem=({cartItem:{name, imageUrl,price,quantity}})=>{
    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl}alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <CloseBtn className='remove-button'/>
        </div>
    )
}

export default CheckoutItem;