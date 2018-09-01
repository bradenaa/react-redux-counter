import React, { Component } from "react";
import PropTypes from "prop-types";

const Counter = (props) => {
    console.log("current: state");
    console.log(props.counter.counter);
    // debugger;
    return (
      <div>

        <h1>{props.counter.counter}</h1>

        <button onClick={() => {
          // debugger;
          return props.onSubtractClick(props.counter.counter)
        }}>-</button>

        <button onClick={() => {
          // debugger;
          return props.onAddClick(props.counter.counter);
        }}>+</button>

      </div>
    )

}


export default Counter;
