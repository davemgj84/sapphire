import React from "react";
import "../styles/Frame.scss";
import "../styles/badges.scss";

import Badges from "./Badges";

const Bottom = (props) => {
  const { badgeItemsArray, hasBadge } = props;
  return (
    <footer id="bottom">
      <div id="badge-container">
        <Badges badgeItemsArray={badgeItemsArray} hasBadge={hasBadge} />
      </div>
    </footer>
  );
};

export default Bottom;
