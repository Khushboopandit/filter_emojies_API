import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Emojies from './component/emojies.js'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Emojies/>
      </div>
    );
  }
}

export default App;
