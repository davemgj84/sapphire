import React from "react";
import "../styles/Frame.scss";

const Navbar = () => {
  return (
    <nav>
      <span id="logo">Sapphire</span>
      <div className="badge-login-buttons">
        <button>Badges</button>
        <button>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
