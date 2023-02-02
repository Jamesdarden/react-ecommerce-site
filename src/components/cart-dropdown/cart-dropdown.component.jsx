
import {useNavigate} from 'react-router-dom';

import { useSelector } from 'react-redux';

import {selectCartItems} from '../../store/cart/cart.selectors'


import  {CartDropDownContainer,CartItems, EmptyMessage} from './cart-dropdown.styles'
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';


const CartDropDown = () => {

  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate('/checkout');
  }

  return (
    <CartDropDownContainer>
        <CartItems>
          {
            cartItems.length ? (cartItems.map((item)=> (
              <CartItem key={item.id} cartItem={item} />
            ))):(
              <EmptyMessage>Your Cart is empty</EmptyMessage>
            )
          }
         
        </CartItems>
        <Button onClick={goToCheckOutHandler}> Checkout</Button>
    </CartDropDownContainer>
  )
}

export default CartDropDown