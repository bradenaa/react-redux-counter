import React, { Component } from 'react';
import CounterContainer from "./containers/CounterContainer"
import { Provider } from 'react-redux';
import { configureStore } from './store';

const store = configureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <CounterContainer />
      </Provider>

    );
  }
}

export default App;
