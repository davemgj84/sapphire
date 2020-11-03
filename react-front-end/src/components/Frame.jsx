import React from "react";
import { Route, Switch } from "react-router-dom";
import Content from "./Content";
import Left from "./Left";
import Right from "./Right";
import Bottom from "./Bottom";
import Navbar from "./Navbar";
import TitlePage from "./TitlePage";
import ChooseChar from "./ChooseChar";
import BadgeDropDown from "./BadgeDropDown";
import NavDropIcon from "./NavDropIcon";
import useColor from "../hooks/useColor";
import useBadge from "../hooks/useBadge";
import OpeningScene from "./OpeningScene";

const Frame = () => {
  const { color, setColor } = useColor("pink");
  const { hasBadge, badgeItemsArray } = useBadge();

  return (
    <div id="parent">
      <Navbar>
        <NavDropIcon icon={<i className="fas fa-chevron-down "></i>}>
          <BadgeDropDown />
        </NavDropIcon>
      </Navbar>
      <Left />
      <Switch>
        <Route exact path="/" component={TitlePage} />
        <Route
          path="/character"
          component={() => (
            <ChooseChar currentColor={color} setColor={setColor} />
          )}
        />
        <Route path="/opening" component={OpeningScene} />
        <Route path="/scene/:id" component={Content} />
      </Switch>
      <Right />
      <Bottom badgeItemsArray={badgeItemsArray} hasBadge={hasBadge} />
    </div>
  );
};

export default Frame;
