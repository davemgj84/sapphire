import React from "react";

const BadgeDropDownItem = (props) => {
  return (
    <div className="badge-component">
      <span className="badge-item">
        <img className="badge-icon" src={props.image} alt="badge icon" />
      </span>
      <span className="name-and-description">
        <p className="badge-name">{props.title}</p>
        <p className="badge-description">{props.description}</p>
      </span>
    </div>
  );
};

export default BadgeDropDownItem;
