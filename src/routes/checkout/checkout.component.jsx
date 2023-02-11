
import {CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total} from "./checkout.styles.jsx";

import CheckOutItem from "../../components/checkout-item/checkout-item.component";

import {selectCartItems, selectCartTotal} from '../../store/cart/cart.selectors';
import { useSelector } from "react-redux";
import {PaymentForm} from '../../components/payment-form/payment-form.component';

const CheckOut = () => {
 
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal)

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total> Total: ${cartTotal}</Total>
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default CheckOut;
