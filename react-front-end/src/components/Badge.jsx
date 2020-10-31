import React, { useState } from "react";
import "../styles/badges.scss";

const Badge = (props) => {
  const { image, name, hasBadge, setHasBadge } = props;

  // const [hasBadge, setHasBadge] = useState(false);

  const imageStyles = {
    opacity: hasBadge[name] ? 1 : 0.25,
  };

  return (
    <div>
      <img
        className="badge-img"
        src={`/assets/badges/${image}.png`}
        style={imageStyles}
      />
      <button
        onClick={() =>
          setHasBadge((prev) => {
            //copying over the hasBadge object and only updating the selected value(name)
            return { ...prev, [name]: true };
          })
        }
      >
        change me
      </button>
    </div>
  );
};

export default Badge;
