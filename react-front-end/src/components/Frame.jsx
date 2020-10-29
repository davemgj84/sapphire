import React from "react";
import { Route, Switch } from "react-router-dom";
import Content from "./Content";
import Left from "./Left";
import Right from "./Right";
import Bottom from "./Bottom";
import Navbar from "./Navbar";
import TitlePage from "./TitlePage";
import ChooseChar from "./ChooseChar";

const Frame = (props) => {
  return (
    <div id="parent">
      <Navbar />
      <Left />
      <Switch>
        <Route exact path="/" component={TitlePage} />
        <Route
          path="/character"
          component={() => (
            <ChooseChar
              currentColor={props.currentColor}
              setColor={props.setColor}
            />
          )}
        />
        <Route path="/scene/:id" component={Content} />
      </Switch>
      <Right />
      <Bottom />
    </div>
  );
};

export default Frame;
