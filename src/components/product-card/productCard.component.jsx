
import { useDispatch, useSelector} from "react-redux";
import {addItemtoCart} from '../../store/cart/cart.actions';
import {selectCartItems} from '../../store/cart/cart.selectors'


import {ProductCardContainer,Footer,Name, Price} from "./productCard.styles.jsx";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";


const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const addProductToCart =() => dispatch(addItemtoCart(cartItems ,product))
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name}/>

      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
