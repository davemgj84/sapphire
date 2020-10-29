import React, { useEffect, useState } from "react";
import DialogueBox from "./DialogueBox";
import axios from "axios";
import "../styles/SceneStyles.scss";

const DialogueScene = (props) => {
  const [scene, setScene] = useState(0);
  const [dialogues, setDialogues] = useState([]);
  const [currentDialogue, setCurrentDialogue] = useState();

  // Grabs our initial scene dialogue ID
  // Maybe use lodash to restructure the data so it is easy to parse || use lodash to search it on the front end
  useEffect(() => {
    axios.get(`/api/scene/${props.match.params.id}`).then((response) => {
      console.log(response.data);
      setScene(response.data.scene.initial_dialogue);
    });
  }, []);

  // useEffect(() => {
  //   axios.get(`/api/dialogue/${scene}`).then((response) => {
  //     console.log(response.data);
  //     setDialogue(response.data);
  //   });
  // }, [dialogue]);

  // @todo CHANGE IMAGE TO BE DYNAMIC TO SCENE WITH SCSS STYLING
  return (
    <div className="scene">
      <img src="/assets/placeholderArt.png" alt="art" />
      <DialogueBox
        scene={props.match.params.id}
        dialogueId={scene}
        // length={dialogues.length}
        // setIndex={setIndex}
        // index={index}
      />
    </div>
  );
};
export default DialogueScene;
