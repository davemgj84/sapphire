import { useEffect, useState } from "react";

export default function useMinigameHook(props) {
  //Running Game
  const [running, setRunning] = useState({
    runningPercent: 0,
    lastLeg: "s",
  });

  useEffect(() => {
    if (running.runningPercent === 100) {
      setRunning({ ...running, finished: true });
    }
  }, [running.runningPercent]);

  useEffect(() => {
    let timer;
    if (running.finished === false) {
      console.log("Hello!", props);
      timer = setTimeout(() => {
        props.current(props.next(props.dialogue[1]));
      }, 5000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [running.finished]);

  const runningMini = (event) => {
    running.finished = false;
    if (
      event.key === "s" &&
      running.lastLeg !== "s" &&
      running.runningPercent < 100
    ) {
      const newPercent = running.runningPercent + 2.5;
      const newLeg = "s";
      setRunning((prev) => ({
        ...prev,
        runningPercent: newPercent,
        lastLeg: newLeg,
      }));
    }
    if (
      event.key === "a" &&
      running.lastLeg !== "a" &&
      running.runningPercent < 100
    ) {
      const newPercent = running.runningPercent + 2.5;
      const newLeg = "a";
      setRunning((prev) => ({
        ...prev,
        runningPercent: newPercent,
        lastLeg: newLeg,
      }));
    }
  };

  // console.log(arrowButtons);

  return { running, runningMini };
}
