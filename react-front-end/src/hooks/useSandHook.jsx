//Sands game
import { useEffect, useState } from "react";

export default function useSandHook(props) {
  const [sand, setSand] = useState([]);
  const [arrowButtons, setArrowButtons] = useState([]);
  const [sandTimer, setSandTimer] = useState({});
  const [round, setRound] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const directions = ["ArrowUp", "ArrowLeft", "ArrowRight", "ArrowDown"];

  //makes directions and refreshes on round change
  useEffect(() => {
    let output = [];
    let reset = [];
    for (let i = 6 + round; i > 0; i--) {
      output.push(directions[Math.floor(Math.random() * 4)]);
      reset.push(false);
    }
    setSand(output);
    setArrowButtons(reset);
    setSandTimer({});
  }, [round, attempts]);

  // turns off timer if last arrow is pressed and checks on arrowButton change
  useEffect(() => {
    if (arrowButtons[sand.length - 1] === true) {
      console.log("CLEARING TIMER");
      setSandTimer({ finished: true });
      setRound((prev) => prev + 1);
    }
  }, [arrowButtons]);

  //track number of attempts and boots to worst end and checks on attempts change
  // useEffect(() => {
  //   if (attempts >= 3) {
  //     setSandTimer({ finished: true });
  //     props.current(props.next(props.dialogue[1]));
  //   }
  // }, [attempts]);

  //starts time if finished is false and resets everything if the event is failed, refreshes on sandTimer.finished change
  // useEffect(() => {
  //   let timer;
  //   if (sandTimer.finished === false) {
  //     timer = setTimeout(() => {
  //       setArrowButtons([false, false, false, false, false, false]);
  //       setSandTimer({});
  //       setAttempts((prev) => prev + 1);
  //       setRound(0);
  //       props.current(props.next(props.dialogue[0]));
  //     }, 5000);
  //   }
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [sandTimer.finished]);

  useEffect(() => {
    let timer;
    console.log("check for timer");
    if (
      Array.isArray(props.dialogue) &&
      props.dialogue[0].story === "ShiftingSands"
    ) {
      console.log("TIMER GO");
      timer = setTimeout(() => {
        setArrowButtons([false, false, false, false, false, false]);
        setSandTimer({});
        setAttempts((prev) => prev + 1);
        setRound(0);
        if (attempts >= 3) {
          setSandTimer({ finished: true });
          props.current(props.next(props.dialogue[1]));
        } else {
          props.current(props.next(props.dialogue[0]));
        }
        console.log("TIMEOUT", attempts);
      }, 4000);
    }
    return () => {
      console.log("CLEAR TIMER");
      clearTimeout(timer);
    };
  }, [props.dialogue, sand]);

  const sandMini = (event) => {
    sandTimer.finished = false;
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
  };
  return { sand, sandMini, arrowButtons, round, setRound };
}
