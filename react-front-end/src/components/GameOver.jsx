import React, { useContext, useEffect } from "react";
import "../styles/SceneStyles.scss";
import MusicContext from "./MusicContext";
import Sound from "react-sound";

export default function GameOver() {
  const { setMusicStatus } = useContext(MusicContext);

  useEffect(() => {
    setMusicStatus(Sound.status.STOPPED);
  }, []);

  return (
    <div className="gameover">
      <iframe
        title="rick-roll"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <a href="/">
        <button className="play-again">Play Again</button>
      </a>
    </div>
  );
}
