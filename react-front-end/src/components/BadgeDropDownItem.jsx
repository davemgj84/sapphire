import React from "react";

const BadgeDropDownItem = () => {
  return (
    <div className="badge-component">
      <span className="badge-item">
        <img
          className="badge-icon"
          src="https://bit.ly/3jOKHXM"
          alt="badge icon"
        />
      </span>
      <span className="name-and-description">
        <p className="badge-name">TITLE</p>
        <p className="badge-description">This is a description</p>
      </span>
    </div>
  );
};

export default BadgeDropDownItem;
