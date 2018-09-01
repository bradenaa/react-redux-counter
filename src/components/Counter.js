import React, { Component } from "react";
import PropTypes from "prop-types";

const Counter = (props) => {
    // debugger;
    return (
      <div>
        <h1>{props.count}</h1>
        <button onClick={() => props.decrement(props)}>-</button>
        <button onClick={() => props.increment(props)}>+</button>
      </div>
    )

}


export default Counter;
