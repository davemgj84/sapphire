import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import axios from "axios";

const App = () => {
  const [state, setState] = useState("Message");

  const fetchData = () => {
    return axios
      .get("/api/data") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log("THIS: ", response); // The entire response from the Rails API

        // console.log(response); // Just the message
        setState(response.data);
      });
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path="/scene/:id" component={Content} />
      </div>
      <h1>{state}</h1>
      <button onClick={() => fetchData()}>Fetch Data</button>
    </BrowserRouter>
  );
};

export default App;
