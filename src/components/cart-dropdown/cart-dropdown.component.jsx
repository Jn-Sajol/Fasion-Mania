import React from 'react';

import Button from '../button/button.component';

import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => (
  <div className='cart-dropdown-container'>
    <div className='cart-items'>
    <CartItem/>
    </div>
    <Button>GO TO CHECKOUT</Button>
  </div>
);

export default CartDropdown;
