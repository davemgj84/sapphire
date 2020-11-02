import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const Leaf = (props) => {
  const { xPosition, time, leafIndex } = props;
  const [visible, setVisible] = useState(true);
  const [fall, setFall] = useState(false);

  // const leaves = ["🍁", "🍃", "🍂", "🌿", "🍀", "🌼", "🌱"];

  const leaves = [
    "/assets/leaves/herb1.png",
    "/assets/leaves/herb2.png",
    "/assets/leaves/herb3.png",
    "/assets/leaves/herb4.png",
    "/assets/leaves/herb5.png",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setFall(true);
    }, time);
    return () => clearTimeout(timer);
  }, [time]);

  const { top } = useSpring({
    top: fall ? 95 : 0,
    config: {
      friction: 400,
      mass: 1000,
      clamp: true,
    },
  });

  const leafStyles = {
    // fontSize: "2em",
    height: "40px",
    width: "40px",
    display: visible ? "block" : "none",
    position: "absolute",
    left: `${xPosition}px`,
    top: top.interpolate((o) => `${o}%`),
  };

  const handleClick = () => {
    setVisible(false);
    setPoints((prev) => prev - 1);
  };

  const { setPoints } = props;
  return (
    <>
      {fall && (
        <animated.div style={leafStyles} onClick={handleClick}>
          <img src={leaves[leafIndex]} />
        </animated.div>
      )}
    </>
  );
};
export default Leaf;
