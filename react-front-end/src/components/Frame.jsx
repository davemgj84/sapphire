import React, { useEffect } from "react";
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
  const { hasBadge, setHasBadge, badgeItemsArray } = useBadge();
  // The below adds setHasBadge as global window function because passing it as a prop to Content component (and lower levels from thereon) causes the app to blow up. This is work around part 20 to make react work with phaser. Ideally, these badges would be collected inside Scenes and/or Minigames and therefore setHasBadge would need to be called within them.
  // useEffect(() => {
  //   window.setHasBadge = (id) =>
  //     setHasBadge((prev) => ({ ...prev, [id]: true }));
  // }, []);
  // console.log(window);
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
        <Route path="/scene/:id" component={Content} />
      </Switch>
      <Right />
      <Bottom
        badgeItemsArray={badgeItemsArray}
        hasBadge={hasBadge}
        // need to pass setHasBadge to Content and down further to dialogueScene && dialogueBox to trigger function there.
        setHasBadge={setHasBadge}
      />
    </div>
  );
};

export default Frame;
