import {useContext} from "react";

import "./productCard.styles.scss";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const {addItemtoCart} = useContext(CartContext)
  const addProductToCart =() => addItemtoCart(product)
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name}/>

      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>Add to cart</Button>
    </div>
  );
};

export default ProductCard;
