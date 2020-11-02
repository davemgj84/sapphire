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

  useEffect(() => {
    //if we build in user logic, we would put some here.
    //We would not want to set all of the badge state to false. Would want to grab specific user badge date from db
    if (loaded) {
      let badgeState = {};
      badgeItemsArray.forEach((badge) => (badgeState[badge.id] = false));
      setHasBadge(badgeState);
    }
  }, [loaded]);

  useEffect(() => {
    window.setHasBadge = (id) =>
      setHasBadge((prev) => ({ ...prev, [id]: true }));
  }, []);

  return { hasBadge, setHasBadge, badgeItemsArray };
};

export default useBadge;
