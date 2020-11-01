import React from "react";
import "../styles/Frame.scss";
import Badges from "./Badges";

const Bottom = (props) => {
  const { badgeItemsArray, hasBadge } = props;
  return (
    <footer id="bottom">
      <Badges badgeItemsArray={badgeItemsArray} hasBadge={hasBadge} />
    </footer>
  );
};

export default Bottom;
