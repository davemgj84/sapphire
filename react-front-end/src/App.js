import React from "react";
import { BrowserRouter } from "react-router-dom";
import Frame from "./components/Frame";
import useColor from "./hooks/useColor";

const App = () => {
  //this logic is located in hook folder useColor
  const { color, setColor } = useColor("green");
  //setColor is a state setter that's being passed down (App->Frame->ChooseChar->Character) and called in Character when a user clicks on an image of a sprite

  return (
    <BrowserRouter>
      <Frame currentColor={color} setColor={setColor} />
    </BrowserRouter>
  );
};

export default App;
