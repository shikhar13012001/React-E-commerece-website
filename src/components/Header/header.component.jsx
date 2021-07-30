import React from 'react';
import './header.styles.scss'
import { Link } from 'react-router-dom';
import {  ReactComponent as Logo } from '../../assests/4.1 crown.svg'
import { auth } from '../../firebase/firebase.utils';
import {connect} from'react-redux';
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { createStructuredSelector } from 'reselect'
import { selectCartHidden} from "../../redux/cart/cart.selectors"
import { selectCurrentUser } from "../../redux/user/user.selector"
const Header = ({currentUser,hidden})=>{
    return(
        <div className="header">
   <Link to ="/" className='logo-container'>
       <Logo className='logo'></Logo>
   </Link>
   <div className="options">
       <Link className='option' to="/shop" >
           SHOP
           </Link><Link className='option' to="/shop" >
           CONTACT
           </Link>
       {
           currentUser ? 
           <Link className='option' to='/' onClick={()=>{auth.signOut()}}>SIGN OUT</Link>
           :
           <Link className='option' to='/signin'>SIGN IN</Link>
       }
       <CartIcon/>
       </div>
       {
        hidden?null:(<CartDropdown/>)

       }
        </div>
    )
}
const mapStateToProps=createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})



export default connect(mapStateToProps)(Header);