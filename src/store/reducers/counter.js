import {ADD_COUNTER, SUBTRACT_COUNTER } from "../actionTypes";

// TODO: Could save someone's default state in our database, and fetch it on the initial component render.
const DEFAULT_STATE = {
  counter: 0
};

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case ADD_COUNTER:
      let addOne = action.currentCounter + 1;
      // debugger;
      return {counter: addOne};
    case SUBTRACT_COUNTER:
      let subtractOne = action.currentCounter - 1;
      // debugger;
      return {counter: subtractOne}
    default:
      return state;
  }
};
