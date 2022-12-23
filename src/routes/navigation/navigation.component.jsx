import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import {ReactComponent as CrwnLogo } from '../../assests/crown.svg';
import {UserContext} from '../../contexts/user.context';
import { signOutUser } from "../../utils/firebase/firebase.utils";


import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

 
  // console.log(currentUser)
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
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
