import React from "react";

const Character = (props) => {
  const { color, chooseColor } = props;

  //JSX styling for dynamic component rendering
  const characterStyles = {
    height: "32px",
    width: "32px",
    backgroundImage: `url(/assets/character_sprites/sprite_${color}.png)`,
    //choosing 32x32px starting in the top, left corner to render single front view of each character
    backgroundPosition: "0px 0px",
  };

  return <div style={characterStyles} onClick={() => chooseColor(color)} />;
};

export default Character;
