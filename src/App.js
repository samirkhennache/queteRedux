import React, { Component } from 'react';
import './App.css';
import store from './store'
import { Provider } from 'react-redux'
import Counter from './components/containers/CounterContainer'


class App extends Component {
  render() {
    return (
      <Provider store ={store}>
      <div className="App">
      <Counter />
      </div>
     </Provider>
    );
  }
}

export default App;
