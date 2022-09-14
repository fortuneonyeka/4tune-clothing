import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "../../Assets/images/4tune-logo.webp";
import Cart from "../../Assets/images/cart.webp";

import "./navigation.styles.scss"

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <div>
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "70px", height: "70px", marginBottom:"50px" }}
            />
          </div>
        </Link>
        <div className="nav-link-container" style={{marginTop:"20px"}}>
          <Link className="nav-link" to="/shop" style={{marginRight:"50px",fontSize:"25px"}}>
            Shope
          </Link>
          <Link className="nav-link" to="/contact" style={{marginRight:"50px", fontSize:"25px"}}>
            Contact
          </Link>
          <Link className="nav-link" to="/login" style={{marginRight:"50px", fontSize:"25px"}}>
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
