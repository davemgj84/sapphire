//Sands game
import { useEffect, useState } from "react";

export default function useSandHook(props) {
  const [sand, setSand] = useState([]);
  const [arrowButtons, setArrowButtons] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [sandTimer, setSandTimer] = useState({});
  // const [ round, setRound ] = useState(0)

  const directions = ["ArrowUp", "ArrowLeft", "ArrowRight", "ArrowDown"];

  useEffect(() => {
    let output = [];
    for (let i = 6; i > 0; i--) {
      output.push(directions[Math.floor(Math.random() * 4)]);
    }
    setSand(output);
  }, []);

  //reset arrows
  useEffect(() => {
    if (arrowButtons[5] === true) {
      setSandTimer({ finished: true });
    }
  }, [arrowButtons]);

  useEffect(() => {
    let timer;
    if (sandTimer.finished === false) {
      timer = setTimeout(() => {
        props.current(props.next(props.dialogue[0]));
        setArrowButtons([false, false, false, false, false, false]);
        setSandTimer({});
      }, 5000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [sandTimer.finished]);

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

    // if (event.key === sand[0]) {
    //   console.log("YES");
    //   setArrowButtons([...arrowButtons.slice(0, 0), true, ...arrowButtons]);
    // }
  };
  return { sand, sandMini, arrowButtons };
}
