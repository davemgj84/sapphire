import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import DialogueScene from "./DialogueScene";
import SapphireGame from "./SapphireGame";
import World from "../phaser/World";

const MAP = "MAP";
const DIALOG = "DIALOG";

// default props - to get location URL
function Content(props) {
  const [stage, setStage] = useState(MAP);

  // Work around for using phaser and react - had to create/attach a funtion in global scope
  useEffect(() => {
    window.advanceScene = () => setStage(DIALOG);
    // shows badges at bottom once game begins
    document.getElementById("badge-container").style.display = "flex";
  }, []);

  useEffect(() => {
    setStage(MAP);
  }, [props.match.params.id]);

  return (
    <div id="game">
      <Route
        path="/scene/:id"
        render={() => {
          return <SapphireGame scene={World} show={stage === MAP} />;
        }}
      />
      {stage === DIALOG && (
        <Route path="/scene/:id" component={DialogueScene} />
      )}
    </div>
  );
}

export default Content;
