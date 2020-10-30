import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/BadgePage.scss";

const BadgePage = () => {
  const [badges, setBadges] = useState([]);
  useEffect(() => {
    axios.get(`/api/badges/1`).then((response) => {
      // console.log(response.data.badges);
      setBadges(response.data.badges);
    });
  }, []);

  return (
    <div className="badge-list">
      <h2 className="header">Your Badges</h2>
      <div className="badge-title">
        {badges.map((badge) => (
          <h4>{badge.title}</h4>
        ))}
      </div>
      <div>
        {badges.map((badge) => (
          <img className="badge-image" src={badge.image}></img>
        ))}
      </div>
      <div className="badge-desc">
        {badges.map((badge) => (
          <p>{badge.description}</p>
        ))}
      </div>
    </div>
  );
};

export default BadgePage;
