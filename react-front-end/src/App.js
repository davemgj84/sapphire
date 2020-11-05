import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Frame from "./components/Frame";
import MapMusic from "./components/MapMusic";
import Sound from "react-sound";
import MusicContext from "./components/MusicContext";

const App = () => {
  const [wasEverClicked, setWasEverClicked] = useState(false);
  const [musicStatus, setMusicStatus] = useState(Sound.status.PLAYING);

  useEffect(() => {
    document.addEventListener("click", () => {
      setWasEverClicked(true);
    });
  });

  return (
    <>
      <MusicContext.Provider value={{ musicStatus, setMusicStatus }}>
        {wasEverClicked && <MapMusic />}
        <BrowserRouter>
          <Frame />
        </BrowserRouter>
      </MusicContext.Provider>
    </>
  );
};

export default App;
