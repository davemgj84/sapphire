import React, { useEffect, useState } from "react";
import DialogueBox from "./DialogueBox";
import axios from "axios";
import "../styles/SceneStyles.scss";

const DialogueScene = (props) => {
  const [init, setInit] = useState(0);
  const [dialogues, setDialogues] = useState([]);
  const [currentDialogue, setCurrentDialogue] = useState({});

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

  // Grabs our initial scene dialogue ID
  useEffect(() => {
    axios.get(`/api/scene/${props.match.params.id}`).then((response) => {
      setInit(response.data.scene.initial_dialogue);
      setDialogues(response.data.dialogues);
      setCurrentDialogue(response.data.dialogues[0]);
    });
  }, []);

  // @todo CHANGE IMAGE TO BE DYNAMIC TO SCENE WITH SCSS STYLING
  return (
    <div className={`scene background${props.match.params.id}`}>
      <DialogueBox
        scene={props.match.params.id}
        dialogue={currentDialogue}
        current={setCurrentDialogue}
        next={getNext}
      />
    </div>
  );
};
export default DialogueScene;
