const sandCheck = (props, state, round) => {
  if (state[5] === true && round > 2) {
    console.log(document.getElementsByClassName("sand-game")[0]);

    document.getElementsByClassName("sand-game")[0].style.display = "none";
    props.current(props.next(props.dialogue[2]));
  }
  return true;
};
export { sandCheck };
