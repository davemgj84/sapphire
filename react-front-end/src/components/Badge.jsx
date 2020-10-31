import React, { useState } from "react";
import "../styles/badges.scss";

const Badge = (props) => {
  const { image } = props;

  const [hasBadge, setHasBadge] = useState(false);

  const imageStyles = {
    opacity: hasBadge ? 1 : 0.25,
  };

  return (
    <div>
      <img
        className="badge-img"
        src={`/assets/badges/${image}.png`}
        style={imageStyles}
      />
      <button onClick={() => setHasBadge((prev) => !prev)}>change me</button>
    </div>
  );
};

export default Badge;
