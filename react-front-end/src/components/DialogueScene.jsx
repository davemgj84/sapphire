import React, { useEffect, useState } from "react";
import DialogueBox from "./DialogueBox";
import axios from "axios";
import "../styles/SceneStyles.scss";

const DialogueScene = (props) => {
  const [dialogues, setDialogues] = useState([]);
  const [currentDialogue, setCurrentDialogue] = useState({});
  const [loaded, setLoaded] = useState(false);

  //searches for next dialogue and returns single object if only one or and array of objects for multiple choices
  const getNext = (current) => {
    const output = dialogues.filter(
      (dialogue) => dialogue.dialogue_id === current.next_dialogue_id
    );
    if (Object.keys(output).length === 1) {
      return output["0"];
    } else {
      return output;
    }
  };

  useEffect(() => {
    if (currentDialogue.id === 16) {
      console.log("i got the ruby");
      window.setHasBadge("ruby");
    }
  }, [currentDialogue]);

  // Grabs our initial scene dialogue ID
  useEffect(() => {
    axios.get(`/api/scene/${props.match.params.id}`).then((response) => {
      setDialogues(response.data.dialogues);
      setCurrentDialogue(response.data.dialogues[0]);
      setLoaded(true);
    });
  }, []);

  return (
    <div className={`scene background${props.match.params.id}`}>
      {loaded && (
        <DialogueBox
          scene={props.match.params.id}
          dialogue={currentDialogue}
          current={setCurrentDialogue}
          next={getNext}
        />
      )}
      {/* This is an example of how to set the setHasBadge via a global window function since Content component blows up if props are passed to it. Look in Frame for global function declaration in useEffect hook there. */}
      {/* <button onClick={() => window.setHasBadge("ruby")}>click me</button> */}
    </div>
  );
};
export default DialogueScene;
