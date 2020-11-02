import { useState, useEffect } from "react";

const useSnailGame = (numPoints, current, next, dialogue) => {
  const [points, setPoints] = useState(numPoints);
  const [snailGameOver, setSnailGameOver] = useState(false);
  useEffect(() => {
    if (points === 0) {
      setSnailGameOver(true);
      current(next(dialogue[0]));
    }
  }, [points]);
  return { points, setPoints, snailGameOver };
};

export default useSnailGame;
