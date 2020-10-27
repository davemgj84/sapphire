import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function DialogueBox(props) {
  console.log(props);

  const [dialogue, setDialogue] = useState(["Message"]);
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);

  useEffect(() => {
    axios
      .get(`/api/scene/${props.scene}`) // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        setLength(response.data.length);
        console.log(response);
        setDialogue(response.data[index].story);
      });
  }, [index]);

  const endLength = (maxLength, currentIndex) => {
    if (maxLength - 1 === currentIndex) {
      return true;
    }
  };
  return (
    <div className="dialogue-box">
      <p>{dialogue}</p>

      {endLength(length, index) ? (
        <Link to={`/scene/${Number(props.scene) + 1}`}>Go</Link>
      ) : (
        <button onClick={() => setIndex((prev) => prev + 1)}>{index}</button>
      )}
    </div>
  );
}
