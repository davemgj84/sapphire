import { useState } from "react";

const useBadge = () => {
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
  let badgeState = {};

  badgeItemsArray.forEach((badge) => (badgeState[badge.name] = false));

  const [hasBadge, setHasBadge] = useState(badgeState);
  console.log("hook", hasBadge);

  return { hasBadge, setHasBadge, badgeItemsArray };
};

export default useBadge;
