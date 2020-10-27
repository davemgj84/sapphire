import React, { useState} from "react";
import { Route } from "react-router-dom";
import Content from "./Content";
import Left from "./Left";
import Right from "./Right";
import Bottom from "./Bottom";
import Navbar from "./Navbar";
import axios from "axios";



const Frame = () => {
  const [state, setState] = useState("Message");

  const fetchData = () => {
    return axios
      .get("/api/dialogue") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        setState(response.data);
      });
  };


  return (
    <div id="parent">
      <Navbar />
      <Left />
      <Route path="/scene/:id" component={Content} />
      {/* <h1>{state}</h1>
      <button onClick={() => fetchData()}>Fetch Data</button> */}
      <Right />
      <Bottom />
    </div>
  );
};

export default Frame;