import React from "react";
import { Link } from "react-router-dom";
import "../styles/TitlePage.scss";
import Character from "./Character";

//could wrap this in a map function
const ChooseChar = (props) => {
  return (
    <div id="choose-character">
      <Character color={"pink"} chooseColor={props.setColor} />
      <Character color={"blue"} chooseColor={props.setColor} />
      <Character color={"red"} chooseColor={props.setColor} />
      <Character color={"brown"} chooseColor={props.setColor} />
      <Character color={"burgundy"} chooseColor={props.setColor} />
      <Character color={"lime"} chooseColor={props.setColor} />
      <Character color={"teal"} chooseColor={props.setColor} />
      <Character color={"green"} chooseColor={props.setColor} />
      {/* <button onClick={() => setColor("pink")}>pink</button> */}
      <Link to={"/scene/1"} id="start-game">
        <button>Begin</button>
      </Link>
    </div>
  );
};

export default ChooseChar;
