
// create a function with has argument 'el' and evaluates whether 'el'
// equals "W", if so return a truthy or falsey result.
const isAWin = el => el.result === "W";

// takes an array of javascript objects and passes them to the .find()
// and returns "objArr.year" if any are returned by the .find() or it
// returns "undefined" to the caller.
function superbowlWin(objArr) {
  let win = objArr.find(isAWin);
  return (win ? win.year : undefined);
}

