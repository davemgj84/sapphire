import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const Sparkle = (props) => {
  const { sparkle } = props;

  const [removed, setRemoved] = useState(false);

  //use timeout and setRemoved flag to remove the sparkle altogether, otherwise, it will re-render with each new badge
  useEffect(() => {
    if (sparkle) {
      const timer = setTimeout(() => {
        setRemoved(true);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [sparkle]);

  const { opacity } = useSpring({
    to: async (next, cancel) => {
      await next({ opacity: 1 });
      await next({ opacity: 0 });
    },
    from: { opacity: 0 },
  });

  const sparkleStyles = {
    width: "36px",
    height: "36px",
    position: "absolute",
    top: "0px",
    left: "0px",
    opacity: sparkle ? opacity : 0,
  };

  return (
    <>
      {!removed && (
        <animated.img src="/assets/badges/sparkle.png" style={sparkleStyles} />
      )}
    </>
  );
};

export default Sparkle;
