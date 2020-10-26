import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import DialogueScene from "./DialogueScene";
import SapphireGame from "./SapphireGame";
import World from "../phaser/World";

const MAP = "MAP";
const DIALOG = "DIALOG";

function Content(props) {
  const [stage, setStage] = React.useState(MAP);

  useEffect(() => {
    window.advanceScene = () => setStage(DIALOG);
  }, []);

  useEffect(() => {
    setStage(MAP);
  }, [props.match.params.id]);

  return (
    <>
      <Route
        path="/scene/:id"
        render={() => {
          return <SapphireGame scene={World} show={stage === MAP} />;
        }}
      />
      {stage === DIALOG && (
        <Route path="/scene/:id" component={DialogueScene} />
      )}
    </>
  );
}

export default Content;
