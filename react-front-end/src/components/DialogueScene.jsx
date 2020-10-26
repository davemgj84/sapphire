import React from "react";
import { Link } from "react-router-dom";

const DialogueScene = () => {
  return (
    <div>
      <h1>This is a scene with dialogue</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vel
        ratione, et totam blanditiis temporibus perferendis nemo cum aliquam
        debitis minima eos reiciendis corporis aliquid nihil animi sequi vero!
        Amet.
      </p>
      <Link to="/scene/2">Go</Link>
    </div>
  );
};
export default DialogueScene;
