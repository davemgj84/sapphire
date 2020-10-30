//@todo: fix timer, fix hiding

const boulderCheck = (props, state) => {
  if (state.runningPercent === 100) {
    document.getElementsByClassName("running-progress")[0].style.display =
      "none";
    props.current(props.next(props.dialogue[0]));
  }
  return true;
};

export { boulderCheck };
