import React, { Component } from "react";
import PropTypes from "prop-types";
import Counter from "../components/Counter"

class CounterList extends Component {
  constructor(props){
    super(props);

  };



  render() {
    let { counters, increment, decrement, addCounter, removeCounter } = this.props;
    let counterList = counters.map((counter) => {
      return (
        <Counter
          key={counter.id}
          {...counter}
          increment={increment}
          decrement={decrement}
        />
      )
    });

    // CONSOLE ARRAY DISPLAY
    let counterArr = counters.map((counter) => (counter.count));
    console.log("Current State:")
    console.log(counterArr);

    return (
      <div>
        {counterList}
        <button onClick={() => addCounter()}>Add New Counter</button>
        <button onClick={() => removeCounter()}>Remove Last Counter</button>
      </div>
    )
  }
}


export default CounterList;
