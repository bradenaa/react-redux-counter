import { ADD_COUNTER, SUBTRACT_COUNTER} from "../actionTypes"

export function addCounter(currentCounter){
  // console.log("currentCounter in action", currentCounter);
  // debugger;
  return {
    type: ADD_COUNTER,
    currentCounter
  }
}

export function subtractCounter(currentCounter){
  // console.log("currentCounter in action", currentCounter);
  // debugger;
  return {
    type: SUBTRACT_COUNTER,
    currentCounter
  }
}
