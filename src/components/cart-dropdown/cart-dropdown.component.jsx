import React from "react";
import CustomButton from "../Custombutton/custombutton.components.jsx";
import { connect } from "react-redux";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter} from 'react-router-dom'

const CartDropdown = ({ cartItems,history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length > 0 ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your Cart is presently empty ;-; </span>
      )}
    </div>
    <CustomButton onClick={() =>history.push('/checkout')}>Go to checkout</CustomButton>
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
