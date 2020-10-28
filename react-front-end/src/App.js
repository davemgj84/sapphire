import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import Content from "./components/Content";
// import Navbar from "./components/Navbar";
import Frame from "./components/Frame";
import axios from "axios";

const App = () => {
  //attempted to set the sprite color dynamically with state setter.
  //passed setColor props from App -> Frame -> TitlePage
  //had a button on TitlePage that when onClick() called setColor("pink")
  //to see if it could change the window.selectorColor to pink inside the useEffect below
  //this looked like window.selectColor = color
  //it seems World.js is already loaded and does not want to let React change it

  // const [color, setColor] = useState("blue");
  // const newSetColor = (newColor) => {
  //   console.log(newColor);
  //   setColor(newColor);
  // };
  useEffect(() => {
    window.selectColor = "pink";
  }, []);

  // const [state, setState] = useState("Message");

  // const fetchData = () => {
  //   return axios
  //     .get("/api/dialogue") // You can simply make your requests to "/api/whatever you want"
  //     .then((response) => {
  //       setState(response.data);
  //     });
  // };
  //this useEffect needs to stay stop level to set the character's color first

  return (
    <BrowserRouter>
      <Frame />
      {/* <div className="App">
        <Navbar />
        <Route path="/scene/:id" component={Content} />
      </div>
      <h1>{state}</h1>
      <button onClick={() => fetchData()}>Fetch Data</button> */}
    </BrowserRouter>
  );
};

export default App;
