import {useContext} from "react";

import {ProductCardContainer,Footer,Name, Price} from "./productCard.styles.jsx";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const {addItemtoCart} = useContext(CartContext)
  const addProductToCart =() => addItemtoCart(product)
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
