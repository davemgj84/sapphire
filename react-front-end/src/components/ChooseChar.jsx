import React from "react";
import { Link } from "react-router-dom";
import "../styles/TitlePage.scss";

const ChooseChar = (props) => {
  return (
    <div id="choose-character">
      {/* <button onClick={() => setColor("pink")}>pink</button> */}
      <Link to={"/scene/1"} id="start-game">
        <button>Begin</button>
      </Link>
    </div>
  );
};

export default ChooseChar;
