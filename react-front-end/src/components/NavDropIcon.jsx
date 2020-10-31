import React, { useState } from "react";
import "../styles/Frame.scss";

const NavDropIcon = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <span className="drop-down-title">BADGES</span>
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
};

export default NavDropIcon;
