import React, { useState } from "react";
import "../styles/badges.scss";

const Badge = (props) => {
  const { image, id, hasBadge, setHasBadge } = props;

  // const [hasBadge, setHasBadge] = useState(false);
  console.log(setHasBadge);
  const imageStyles = {
    opacity: hasBadge[id] ? 1 : 0.25,
  };

  return (
    <div>
      <img className="badge-img" src={image} style={imageStyles} />
    </div>
  );
};

export default Badge;
