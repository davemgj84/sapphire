import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Frame from "./components/Frame";
// import useColor from "./hooks/useColor";
import MapMusic from "./components/MapMusic";

const App = () => {
  const [wasEverClicked, setWasEverClicked] = useState(false);

  useEffect(() => {
    document.addEventListener("click", () => {
      setWasEverClicked(true);
    });
  });

  return (
    <>
      {/* {wasEverClicked && <MapMusic />} */}
      <BrowserRouter>
        <Frame />
      </BrowserRouter>
    </>
  );
};

export default App;
