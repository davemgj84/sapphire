import Phaser from "phaser";
import { useEffect } from "react";
import React from "react";

const SapphireGame = (props) => {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 1024,
      height: 768,
      physics: {
        default: "arcade",
        arcade: {
          // gravity: { y: 200 },
        },
      },
      scene: [props.scene],
      parent: "game-container",
      pixelArt: true,
    };

    new Phaser.Game(config);
  }, [props.scene]);

  return (
    <div
      id="game-container"
      style={{ display: props.show ? "block" : "none" }}
    ></div>
  );
};

export default SapphireGame;
