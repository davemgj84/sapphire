import { useState } from "react";

export default function useMinigameHook() {
  const [state, setState] = useState({
    runningPercent: 0,
    lastLeg: "s",
  });

  const runningMini = (event) => {
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
