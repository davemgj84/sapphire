import React from "react";
import Badge from "./Badge";

const Badges = (props) => {
  const { badgeItemsArray, hasBadge } = props;

  const allBadges = badgeItemsArray.map((badge, index) => {
    return (
      <Badge
        key={index}
        image={badge.image}
        id={badge.id}
        hasBadge={hasBadge}
      />
    );
  });

  return <div className="badge-row">{allBadges}</div>;
};

export default Badges;
