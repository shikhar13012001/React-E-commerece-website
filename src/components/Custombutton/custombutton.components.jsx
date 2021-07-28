import React from 'react'
import './custombutton.styles.scss'
const CustomButton = ({ children, isGoogleSignIn,inverted,...otherProps})=>{
    return (
        <button className={`custom-button ${inverted ? 'inverted':''} ${isGoogleSignIn ? 'google-sign-in':''} `} {...otherProps}>
        {
            children
        }
        </button>

    )
}
export default CustomButton;