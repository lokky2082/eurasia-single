export function transitionEndEventName() {
  let i,
    undefined,
    el = document.createElement("div"),
    transitions = {
      transition: "transitionend",
      OTransition: "otransitionend", // oTransitionEnd in very old Opera
      MozTransition: "transitionend",
      WebkitTransition: "webkitTransitionEnd"
    };
  for (i in transitions) {
    if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
      return transitions[i];
    }
  }
  //TODO: throw 'TransitionEnd event is not supported in this browser';
}
