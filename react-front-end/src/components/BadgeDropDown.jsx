import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Frame.scss";
import BadgeDropDownItem from "./BadgeDropDownItem";

const BadgeDropDown = () => {
  const [allbadges, setAllBadges] = useState([]);

  useEffect(() => {
    axios.get(`/api/badges`).then((response) => {
      const badges = response.data;
      setAllBadges(badges);
    });
  }, []);

  const badgeList = allbadges.map((badge) => {
    return (
      <BadgeDropDownItem
        image={badge.image}
        title={badge.title}
        description={badge.description}
      />
    );
  });

  return <div className="dropdown">{badgeList}</div>;
};

export default BadgeDropDown;
