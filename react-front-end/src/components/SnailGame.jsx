import React from "react";
import Leaf from "./Leaf";

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let data = [];
for (let i = 0; i < 80; i++) {
  const time = randomInteger(0, 60000);
  const xPosition = randomInteger(10, 750);
  const leafIndex = randomInteger(0, 4);
  data.push({ time, xPosition, leafIndex });
}

const SnailGame = (props) => {
  const { points, setPoints, snailGameOver } = props;

  const SnailGameStyles = {
    position: "relative",
    width: "800px",
    height: "600px",
    display: snailGameOver ? "none" : "block",
  };

  const innerDivStyle = {
    width: "100%",
    height: "100%",
  };

  const leaves = data.map((d, i) => {
    return (
      <Leaf
        key={i}
        setPoints={setPoints}
        xPosition={d.xPosition}
        time={d.time}
        leafIndex={d.leafIndex}
      />
    );
  });

  return (
    <div style={SnailGameStyles}>
      <h1>{points}</h1>
      {points > 0 ? (
        <div style={innerDivStyle}> {leaves}</div>
      ) : (
        <div style={innerDivStyle}>You Win!</div>
      )}
    </div>
  );
};
export default SnailGame;
