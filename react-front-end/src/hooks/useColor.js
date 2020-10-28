import { useEffect, useState } from "react";

const useColor = (defaultColor) => {
  const [color, setColor] = useState(defaultColor);

  useEffect(() => {
    window.selectColor = color;
  }, [color]);

  return { color, setColor };
};

export default useColor;

//need a separate component that allows user to select a color
//the component needs a setColor function to change the color at the top level
//
// const [color, setColor] = useState("blue");
//must have color in the dependency array or it won't work
// useEffect(() => {
//   window.selectColor = color;
// }, [color]);
// console.log(window);
//this useEffect needs to stay stop level to set the character's color first
