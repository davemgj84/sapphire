import React from "react";

const BadgeDropDownItem = (props) => {
  return (
    <div className="badge-component">
      <div className="badge-item">
        <img className="badge-icon" src={props.image} alt="badge icon" />
      </div>
      <div className="align-left-please">
        <div className="name-and-description">
          <p className="badge-name">{props.title}</p>
          <p className="badge-description">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BadgeDropDownItem;
