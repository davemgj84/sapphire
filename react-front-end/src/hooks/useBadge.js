import { useState, useEffect } from "react";
import axios from "axios";

const useBadge = () => {
  const [loaded, setLoaded] = useState(false);
  const [badgeItemsArray, setBadgeItemsArray] = useState([]);
  const [hasBadge, setHasBadge] = useState({});

  //useEffect will allow everything to load before it runs
  useEffect(() => {
    axios
      .get(`/api/badges`)
      .then((response) => {
        setBadgeItemsArray(response.data);
      })
      .then(() => setLoaded(true))
      .catch((error) => console.log(error));
  }, []);

  console.log("this is hopefully badges from db", badgeItemsArray);

  useEffect(() => {
    //if we build in user logic, we would put some here.
    //We would not want to set all of the badge state to false. Would want to grab specific user badge date from db
    if (loaded) {
      let badgeState = {};
      badgeItemsArray.forEach((badge) => (badgeState[badge.id] = false));
      setHasBadge(badgeState);
    }
  }, [loaded]);

  console.log("has badge", hasBadge);

  // let badgeState = {};
  // if (loaded) {
  //   badgeItemsArray.forEach((badge) => (badgeState[badge.name] = false));
  // }

  return { hasBadge, setHasBadge, badgeItemsArray };

  // const badgeItemsArray = [
  //   {
  //     image: "01_sapphire_shard",
  //     name: "sapphireOne",
  //   },
  //   {
  //     image: "02_sapphire_shard",
  //     name: "sapphireTwo",
  //   },
  //   {
  //     image: "03_sapphire_shard",
  //     name: "sapphireThree",
  //   },
  //   {
  //     image: "burger",
  //     name: "burger",
  //   },
  //   {
  //     image: "pusheen",
  //     name: "pusheen",
  //   },
  //   {
  //     image: "narwhal",
  //     name: "narwhal",
  //   },
  //   {
  //     image: "rock",
  //     name: "rock",
  //   },
  //   {
  //     image: "ruby",
  //     name: "ruby",
  //   },
  // ];
};

export default useBadge;
