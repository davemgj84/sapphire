import React from "react";
import { Route, Switch } from "react-router-dom";
import Content from "./Content";
import Left from "./Left";
import Right from "./Right";
import Bottom from "./Bottom";
import Navbar from "./Navbar";
import TitlePage from "./TitlePage";
import ChooseChar from "./ChooseChar";
import BadgePage from "./BadgePage";
import useColor from "../hooks/useColor";
import useBadge from "../hooks/useBadge";

const Frame = (props) => {
  const { color, setColor } = useColor("pink");
  const { hasBadge, badgeItemsArray } = useBadge();

  return (
    <div id="parent">
      <Navbar />
      <Left />
      <Switch>
        <Route exact path="/" component={TitlePage} />
        <Route path="/badges" component={BadgePage} />
        <Route
          path="/character"
          component={() => (
            <ChooseChar currentColor={color} setColor={setColor} />
          )}
        />
        {/* passing setHasBadge into the content component here breaks the app*/}
        <Route path="/scene/:id" component={Content} />
      </Switch>
      <Right />
      <Bottom badgeItemsArray={badgeItemsArray} hasBadge={hasBadge} />
    </div>
  );
};

export default Frame;
