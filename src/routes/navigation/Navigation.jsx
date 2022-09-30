import React, { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/User.context";
import Logo from "../../Assets/images/4tune-logo.webp";
import Cart from "../../Assets/images/cart.webp";


import "./navigation.styles.scss"

const Navigation = () => {
  const {currentUser} = useContext(UserContext)
  console.log(currentUser);
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <div>
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "70px", height: "70px" }}
            />
          </div>
        </Link>
        <div className="nav-link-container">
          <Link className="nav-link" to="/shop" >
            Shope
          </Link>
          <Link className="nav-link" to="/contact" >
            Contact
          </Link>
          {currentUser ? (<span className="nav-link">Sign Out</span>) : (<Link className="nav-link" to="/auth">
            SignIn
          </Link>)}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
