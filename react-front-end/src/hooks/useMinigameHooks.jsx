import { useEffect, useState } from "react";

export default function useMinigameHook(props) {
  const [state, setState] = useState({
    runningPercent: 0,
    lastLeg: "s",
    // finished: false,
  });
  // const [start, setStart] = useState(false);
  // console.log("THIS???: ", props);

  useEffect(() => {
    if (state.runningPercent === 100) {
      setState({ ...state, finished: true });
    }
  }, [state.runningPercent]);

  useEffect(() => {
    let timer;
    if (state.finished === false) {
      console.log("Hello!", props);
      timer = setTimeout(() => {
        props.current(props.next(props.dialogue[1]));
      }, 5000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [state.finished]);

  const runningMini = (event) => {
    state.finished = false;
    if (
      event.key === "s" &&
      state.lastLeg !== "s" &&
      state.runningPercent < 100
    ) {
      const newPercent = state.runningPercent + 2.5;
      const newLeg = "s";
      setState((prev) => ({
        ...prev,
        runningPercent: newPercent,
        lastLeg: newLeg,
      }));
    }
    if (
      event.key === "a" &&
      state.lastLeg !== "a" &&
      state.runningPercent < 100
    ) {
      const newPercent = state.runningPercent + 2.5;
      const newLeg = "a";
      setState((prev) => ({
        ...prev,
        runningPercent: newPercent,
        lastLeg: newLeg,
      }));
    }
  };

  return { state, runningMini };
}
