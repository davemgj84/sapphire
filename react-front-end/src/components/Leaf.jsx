import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const Leaf = (props) => {
  const {
    xPosition,
    time,
    leafIndex,
    // visible,
    // setVisible,
    // fall,
    // setFall,
  } = props;
  const [visible, setVisible] = useState(true);
  const [fall, setFall] = useState(false);

  const leaves = ["🍁", "🍃", "🍂", "🌿", "🍀", "🌼", "🌱"];

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
      // tension: 900,
      clamp: true,
    },
  });

  const leafStyles = {
    fontSize: "2em",
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
          <span>{leaves[leafIndex]}</span>
        </animated.div>
      )}
    </>
  );
};
export default Leaf;
