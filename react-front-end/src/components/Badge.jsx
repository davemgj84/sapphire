import React from "react";
import "../styles/badges.scss";
import Sparkle from "./Sparkle";

const Badge = (props) => {
  const { image, id, hasBadge } = props;

  // Controls badge opacity - when user gets a badge - gets brighter
  const imageStyles = {
    opacity: hasBadge[id] ? 1 : 0.25,
  };

  return (
    <div className={`badge${id}`} style={{ position: "relative" }}>
      <img
        id={`badge${id}`}
        className="badge-img"
        src={image}
        style={imageStyles}
        alt={`badge${id}`}
      />
      <Sparkle sparkle={hasBadge[id]} />
    </div>
  );
};

export default Badge;
