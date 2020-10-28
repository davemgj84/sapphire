import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import Content from "./components/Content";
// import Navbar from "./components/Navbar";
import Frame from "./components/Frame";
import axios from "axios";

const App = () => {
  //need a separate component that allows user to select a color
  //the component needs a setColor function to change the color at the top level
  //
  const [color, setColor] = useState("blue");
  //must have color in the dependency array or it won't work
  useEffect(() => {
    window.selectColor = color;
  }, [color]);
  console.log(window);

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
      <button onClick={() => setColor("pink")}>pink</button>
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
