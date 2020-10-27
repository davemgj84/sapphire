import React, { useState } from "react";
import "../styles/Frame.scss";

const Navbar = () => {
  const [counter, setCounter] = useState(0);

  return (
    <nav>
      <span id="logo">Sapphire</span>
      <span className="badge-login-buttons">
        <button>Badges</button>
        <button>Logout</button>
      </span>

      {/* <button onClick={() => setCounter((prev) => prev + 1)}>
          {counter}
        </button> */}
    </nav>
  );
};

export default Navbar;
