import React from "react";
import "../styles/Frame.scss";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <a id="logo" href="/">
        <i className="fas fa-gem fa-2x"></i> SAPPHIRE
      </a>
      <div className="badge-login-buttons">
        <ul className="navbar-nav">{props.children}</ul>

        <button className="log-button">LOGOUT</button>
      </div>
    </nav>
  );
};

export default Navbar;
