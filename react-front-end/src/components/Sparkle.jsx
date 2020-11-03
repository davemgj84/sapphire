import React from "react";
import { useSpring, animated } from "react-spring";

const Sparkle = (props) => {
  const { sparkle } = props;

  const { opacity } = useSpring({
    to: async (next, cancel) => {
      await next({ opacity: 1 });
      await next({ opacity: 0 });
    },
    from: { opacity: 0 },
  });

  const sparkleStyles = {
    width: "16px",
    height: "16px",
    position: "absolute",
    top: "5px",
    left: "5px",
    opacity: sparkle ? opacity : 0,
  };

  return (
    <animated.img src="/assets/badges/sparkle.png" style={sparkleStyles} />
  );
};

export default Sparkle;
