import React, { useEffect, useState } from "react";
import DialogueBox from "./DialogueBox";
import axios from "axios";
import "../styles/SceneStyles.scss";

const DialogueScene = (props) => {
  const [dialogues, setDialogues] = useState(["Message"]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`/api/scene/${props.match.params.id}`) // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        setDialogues(response.data);
      });
  }, [index]);

  // @todo CHANGE IMAGE TO BE DYNAMIC TO SCENE WITH SCSS STYLING
  return (
    <div className="scene">
      <img src="/assets/placeholderArt.png" alt="art" />
      <DialogueBox
        scene={props.match.params.id}
        dialogue={dialogues[index].story}
        length={dialogues.length}
        setIndex={setIndex}
        index={index}
      />
    </div>
  );
};
export default DialogueScene;
