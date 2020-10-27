import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DialogueBox from "./DialogueBox";
import axios from "axios";

const DialogueScene = (props) => {
  // console.log(props.match.params.id); //pull scene id

  const [dialogues, setDialogues] = useState(["Message"]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`/api/scene/${props.match.params.id}`) // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        setDialogues(response.data);
      });
  }, [index]);

  return (
    <div>
      <h1>This is a scene with dialogue</h1>
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
