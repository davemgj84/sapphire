import { useState, useEffect } from "react";
import axios from "axios";

const useBadge = () => {
  const [data, setData] = useState([]);

  //useEffect will allow everything to load before it runs
  useEffect(() => {
    axios
      .get(`/api/badges`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log("this is hopefully badges from db", data);

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

  return { hasBadge, setHasBadge, badgeItemsArray };
};

export default useBadge;
