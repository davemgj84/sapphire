import React from "react";
import { Link } from "react-router-dom";
import "../styles/Frame.scss";

const Navbar = () => {
  return (
    <nav>
      <a id="logo" href="/">
        <i className="fas fa-gem fa-2x"></i> SAPPHIRE
      </a>

      <div className="badge-login-buttons">
        <Link to="/badges" className="badge">
          BADGES
        </Link>
        <button className="log-button">LOGOUT</button>
      </div>
    </nav>
  );
};

export default Navbar;
