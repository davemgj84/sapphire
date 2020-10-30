const sandCheck = (props, state) => {
  if (state[5] === true) {
    document.getElementsByClassName("sand-game")[0].style.display = "none";
    props.current(props.next(props.dialogue[2]));
  }
  return true;
};
export { sandCheck };
