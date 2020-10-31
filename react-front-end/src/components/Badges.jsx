import React, { useState } from "react";
import Badge from "./Badge";
import useBadge from "../hooks/useBadge";

//@ todo : maybe move sapphires to their own component
const Badges = () => {
  // const [hasBadge, setHasBadge] = useState({
  //   sapphireOne: false,
  //   sapphireTwo: false,
  //   sapphireThree: false,
  //   burger: false,
  //   narwhal: false,
  //   pusheen: false,
  //   rock: false,
  //   ruby: false,
  // });

  const badgeItemsArray = [
    {
      image: "01_sapphire_shard",
      name: "sapphireOne",
    },
    {
      image: "02_sapphire_shard",
      name: "sapphireTwo",
    },
    {
      image: "03_sapphire_shard",
      name: "sapphireThree",
    },
    {
      image: "burger",
      name: "burger",
    },
    {
      image: "pusheen",
      name: "pusheen",
    },
    {
      image: "narwhal",
      name: "narwhal",
    },
    {
      image: "rock",
      name: "rock",
    },
    {
      image: "ruby",
      name: "ruby",
    },
  ];

  //this hook maps an array of names so the array passed in needs to be manipulated to match that format
  const { hasBadge, setHasBadge } = useBadge(
    badgeItemsArray.map((badge) => badge.name)
  );

  //setting dynamic jsx based on the above data
  const allBadges = badgeItemsArray.map((badge, index) => {
    return (
      <Badge
        key={index}
        image={badge.image}
        name={badge.name}
        setHasBadge={setHasBadge}
        hasBadge={hasBadge}
      />
    );
  });

  return <div className="badge-row">{allBadges}</div>;
};

export default Badges;
