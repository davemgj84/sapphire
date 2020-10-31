import React, { useState } from "react";
import Badge from "./Badge";
import useBadge from "../hooks/useBadge";

//@ todo : maybe move sapphires to their own component
const Badges = (props) => {
  const { badgeItemsArray, hasBadge, setHasBadge } = props;

  const allBadges = badgeItemsArray.map((badge, index) => {
    return (
      <Badge
        key={index}
        image={badge.image}
        id={badge.id}
        setHasBadge={setHasBadge}
        hasBadge={hasBadge}
      />
    );
  });

  return <div className="badge-row">{allBadges}</div>;
};

export default Badges;
