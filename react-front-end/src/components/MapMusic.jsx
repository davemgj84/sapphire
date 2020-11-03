import React, { useContext } from "react";
import Sound from "react-sound";
import song from "../Sound/Abstraction - Three Red Hearts - Sanctuary.wav";
import MusicContext from "./MusicContext";

const MapMusic = () => {
  const { musicStatus } = useContext(MusicContext);
  return (
    <Sound
      url={song}
      playStatus={musicStatus}
      volume={5}
      autoLoad={true}
      loop={true}
    />
  );
};

export default MapMusic;
