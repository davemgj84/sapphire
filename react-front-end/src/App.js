import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import Content from "./components/Content";
// import Navbar from "./components/Navbar";
import Frame from "./components/Frame";
import axios from "axios";
import useColor from "./hooks/useColor";

const App = () => {
  const { color, setColor } = useColor("green");

  // const [state, setState] = useState("Message");

  // const fetchData = () => {
  //   return axios
  //     .get("/api/dialogue") // You can simply make your requests to "/api/whatever you want"
  //     .then((response) => {
  //       setState(response.data);
  //     });
  // };

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
