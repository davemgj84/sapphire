import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Content from "./components/Content";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path="/scene/:id" component={Content} />
      </div>
    </BrowserRouter>
  );
};

export default App;
