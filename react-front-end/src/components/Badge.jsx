import React, { useRef } from "react";
import "../styles/badges.scss";
// import { useSpring, useChain, animated } from "react-spring";

const Badge = (props) => {
  const { image, id, hasBadge } = props;

  // const fadeInRef = useRef();
  // const fadeOutRef = useRef();

  // const fadeInSpring = useSpring({
  //   ref: fadeInRef,
  //   from: { opacity: 0 },
  //   to: { opacity: 100 },
  // });

  // const fadeOutSpring = useSpring({
  //   ref: fadeOutRef,
  //   from: { opacity: 100 },
  //   to: { opacity: 0 },
  // });

  const imageStyles = {
    opacity: hasBadge[id] ? 1 : 0.25,
  };

  // const sparkleStyles = {
  //   width: "16px",
  //   height: "16px",
  //   position: "absolute",
  //   top: "5px",
  //   left: "5px",
  //   opacity: hasBadge[id] && useChain([fadeInRef, fadeOutRef]),
  // };

  return (
    <div style={{ position: "relative" }}>
      <img className="badge-img" src={image} style={imageStyles} />
      {/* <animated.img src="/assets/badges/sparkle.png" style={sparkleStyles} /> */}
    </div>
  );
};

export default Badge;
