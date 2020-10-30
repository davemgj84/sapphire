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

  //Sands game

  const [sand, setSand] = useState([]);
  const [arrowButtons, setArrowButtons] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const directions = ["ArrowUp", "ArrowLeft", "ArrowRight", "ArrowDown"];
  // const desertPath = () => {

  // };

  useEffect(() => {
    let output = [];
    for (let i = 6; i > 0; i--) {
      output.push(directions[Math.floor(Math.random() * 4)]);
    }
    setSand(output);
  }, []);
  // setSand(desertPath());

  const sandMini = (event) => {
    for (let i = 0; i < sand.length; i++) {
      if (i === 0 && event.key === sand[0]) {
        setArrowButtons([
          ...arrowButtons.slice(0, 0),
          true,
          ...arrowButtons.slice(1),
        ]);
      } else if (event.key === sand[i] && arrowButtons[i - 1] === true) {
        setArrowButtons([
          ...arrowButtons.slice(0, i),
          true,
          ...arrowButtons.slice(i + 1),
        ]);
      }
    }

    // if (event.key === sand[0]) {
    //   console.log("YES");
    //   setArrowButtons([...arrowButtons.slice(0, 0), true, ...arrowButtons]);
    // }
  };
  console.log(arrowButtons);

  return { running, runningMini, sand, sandMini, arrowButtons };
}
