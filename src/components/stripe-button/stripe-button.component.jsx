import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
const key='pk_test_51JJbrqSHJM2PW4S0dazVhEqJROGOElSL7QCnRlRTWdDLfr2BaybA7b7F4lIrKma8CdW56XYvcBr72F8XXAGu2rqI00ODRGhFu6';
const StripeCheckoutbutton =({ price}) =>{
    const priceForStripe= price*100;
    const publishableKey =key;
    const onToken= token=>{
        console.log(token);
        alert('priceForStripe');
    }
    return (
        <StripeCheckout
        label='Pay Now'
        name='CRWN clothing Ltd'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`your total is $${price}`}
        amount={ priceForStripe }
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}
export default StripeCheckoutbutton;

