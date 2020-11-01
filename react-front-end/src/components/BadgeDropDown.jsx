import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Frame.scss";

const BadgeDropDown = () => {
  // const [activeMenu, setActiveMenu] = useState("main");
  const [badgeTitle, setBadgeTitle] = useState("");
  const [badgeImage, setBadgeImage] = useState("");
  const [badgeDescription, setBadgeDescription] = useState("");

  // useEffect(() => {
  //   axios.get(`/api/badges/1`).then((response) => {
  //     const badges = response.data.badges;
  //     console.log(badges[0]);
  //     setBadgeImage(badges[0].image);
  //     setBadgeTitle(badges[0].title);
  //     setBadgeDescription(badges[0].description);
  //   });
  // }, []);

  return (
    <div className="dropdown">
      <div className="menu">
        <a href="#" className="badge-item">
          <img
            className="badge-icon"
            src="https://bit.ly/3jOKHXM"
            alt="badge icon"
          />
          <span className="badge-name">TITLE</span>
        </a>
      </div>
    </div>
  );
};

export default BadgeDropDown;
