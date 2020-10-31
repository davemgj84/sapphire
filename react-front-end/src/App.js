import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Frame from "./components/Frame";
// import useColor from "./hooks/useColor";
import MapMusic from "./components/MapMusic";

const App = () => {
  //this logic is located in hook folder useColor
  // const { color, setColor } = useColor("pink");
  //setColor is a state setter that's being passed down (App->Frame->ChooseChar->Character) and called in Character when a user clicks on an image of a sprite
  const [wasEverClicked, setWasEverClicked] = useState(false);

  useEffect(() => {
    document.addEventListener("click", () => {
      setWasEverClicked(true);
    });
  });

  return (
    <>
      {wasEverClicked && <MapMusic />}
      <BrowserRouter>
        <Frame />
      </BrowserRouter>
    </>
    // currentColor={color} setColor={setColor}
  );
};

export default App;
