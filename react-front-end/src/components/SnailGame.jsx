import React, { useState } from "react";
import Leaf from "./Leaf";

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let data = [];
for (let i = 0; i < 80; i++) {
  const time = randomInteger(0, 60000);
  const xPosition = randomInteger(10, 770);
  const leafIndex = randomInteger(0, 6);
  data.push({ time, xPosition, leafIndex });
}

const SnailGame = () => {
  const [points, setPoints] = useState(10);

  const SnailGameStyles = {
    position: "relative",
    width: "800px",
    height: "600px",
    border: "2px solid black",
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

      {/* <Leaf setPoints={setPoints} xPosition={10} time={3000} leafIndex={0} />
      <Leaf setPoints={setPoints} xPosition={780} time={4000} leafIndex={4} />
      <Leaf setPoints={setPoints} xPosition={80} time={1000} leafIndex={4} />
      <Leaf setPoints={setPoints} xPosition={70} time={5000} leafIndex={4} />
      <Leaf setPoints={setPoints} xPosition={90} time={6000} leafIndex={4} />
      <Leaf setPoints={setPoints} xPosition={600} time={3000} leafIndex={4} />
      <Leaf setPoints={setPoints} xPosition={300} time={2000} leafIndex={4} />
      <Leaf setPoints={setPoints} xPosition={560} time={5000} leafIndex={4} />
      <Leaf setPoints={setPoints} xPosition={710} time={9000} leafIndex={4} /> */}
    </div>
  );
};
export default SnailGame;
