import React from "react";

const Character = (props) => {
  const { color, chooseColor, currentColor } = props;

  //JSX styling for dynamic component rendering
  const characterStyles = {
    margin: "1em",
    height: "32px",
    width: "32px",
    backgroundImage: `url(/assets/character_sprites/sprite_${color}.png)`,
    //choosing 32x32px starting in the top, left corner to render single front view of each character
    backgroundPosition: "0px 0px",
    border: currentColor === color ? "2px solid black" : "none",
  };
  //can add a class to add non-dynamic styles
  //could wrap in another div to give space away from the image, if needed
  return <div style={characterStyles} onClick={() => chooseColor(color)} />;
};

export default Character;
