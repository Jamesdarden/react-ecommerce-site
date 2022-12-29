import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import {ReactComponent as CrwnLogo } from '../../assests/crown.svg';
import {UserContext} from '../../contexts/user.context';
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";


import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

 
  // console.log(isCartOpen)
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">shop</Link>
          {
            currentUser ? (
              <span className="nav-link" onClick={signOutUser}>sign Out</span>
              ) :( <Link className="nav-link" to="/auth">sign in</Link>)
          }
          <CartIcon />
          
        </div>
         {/* && short circuit operator  // components are functions which evalute to truthy returns last item in statement*/}
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
