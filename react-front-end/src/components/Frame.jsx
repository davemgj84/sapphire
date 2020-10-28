import React from "react";
import { Route, Switch } from "react-router-dom";
import Content from "./Content";
import Left from "./Left";
import Right from "./Right";
import Bottom from "./Bottom";
import Navbar from "./Navbar";
import TitlePage from "./TitlePage";

const Frame = () => {
  return (
    <div id="parent">
      <Navbar />
      <Left />
      <Switch>
        <Route exact path="/" component={TitlePage} />
        <Route path="/scene/:id" component={Content} />
      </Switch>
      <Right />
      <Bottom />
    </div>
  );
};

export default Frame;
