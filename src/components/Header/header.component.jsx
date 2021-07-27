import React from 'react';
import './header.styles.scss'
import { Link } from 'react-router-dom';
import {  ReactComponent as Logo } from '../../assests/4.1 crown.svg'
import { auth } from '../../firebase/firebase.utils';
const Header = ({currentUser})=>{
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
       </div>
        </div>
    )
}
export default Header;