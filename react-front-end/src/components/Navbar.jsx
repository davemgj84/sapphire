import React from "react";
import "../styles/Frame.scss";

const Navbar = () => {
  return (
    <nav>
      <a id="logo" href="/">
        <i className="fas fa-gem fa-2x"></i> SAPPHIRE
      </a>

      <div className="badge-login-buttons">
        <button className="badge">BADGES</button>
        <button className="log-button">LOGOUT</button>
      </div>
    </nav>
  );
};

export default Navbar;
