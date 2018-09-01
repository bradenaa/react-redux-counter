import React, { Component } from "react"
import { connect } from "react-redux";
import { addCounter, subtractCounter } from "../store/actions/index"
import Counter from "../components/Counter"

const mapStateToProps = state => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
    onAddClick: (currentCounter) => {
      // debugger;
      return dispatch(addCounter(currentCounter))
    },
    onSubtractClick: (currentCounter) => {
      // debugger;
      return dispatch(subtractCounter(currentCounter))
    }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
