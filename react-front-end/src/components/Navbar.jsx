import React from "react";
import { Link } from "react-router-dom";
import "../styles/Frame.scss";

const Navbar = () => {
  return (
    <nav>
      <a id="logo" href="/">
        Sapphire
      </a>

      <div className="badge-login-buttons">
        <button>Badges</button>
        <button>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
