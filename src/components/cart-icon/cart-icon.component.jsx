//import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg';

import { useDispatch, useSelector } from 'react-redux';

import {selectCartCount,selectIsCartOpen } from '../../store/cart/cart.selectors';
import { setIsCartOpen} from '../../store/cart/cart.actions';

import {CartIconContainer, ShoppingIcon, ItemCount} from './cart-icon.styles';

const CartIcon = () => {

  const dispatch = useDispatch()

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen)

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

 


  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIcon />
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;