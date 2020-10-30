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
    </div>
  );
};
export default DialogueScene;
