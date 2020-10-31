import React, { useEffect, useState } from "react";
import axios from "axios";
import { CSSTransition } from "react-transition-group";
import "../styles/Frame.scss";

const BadgeDropDown = () => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const [badgeTitle, setBadgeTitle] = useState("");
  const [badgeImage, setBadgeImage] = useState("");
  const [badgeDescription, setBadgeDescription] = useState("");

  const calcHeight = (el) => {
    const height = el.offSetHeight;
    setMenuHeight(height);
  };

  useEffect(() => {
    axios.get(`/api/badges/1`).then((response) => {
      const badges = response.data.badges;
      console.log(badges[0]);
      setBadgeImage(badges[0].image);
      setBadgeTitle(badges[0].title);
      setBadgeDescription(badges[0].description);
    });
  }, []);

  const BadgeDropDown = (props) => {
    return (
      <a
        href="#"
        className="badge-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        {activeMenu !== "main" && (
          <span className="back-icon-button">{props.leftIcon}</span>
        )}
        <span className="badge-name">{props.children}</span>
      </a>
    );
  };

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <BadgeDropDown leftIcon={null} goToMenu="description">
            <img className="badge-icon" src={badgeImage} alt="badge icon" />
            {badgeTitle}
          </BadgeDropDown>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "description"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
      >
        <div className="menu">
          <BadgeDropDown
            leftIcon={<i class="fas fa-arrow-left"></i>}
            goToMenu="main"
          />

          <p className="badge-description">{badgeDescription}</p>
        </div>
      </CSSTransition>
    </div>
  );
};

export default BadgeDropDown;
