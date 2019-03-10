import React, { Component } from 'react';
import './App.css';
import GameBody from './Components/GameBody';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clicky Game</h1> 
          <h1>Star Trek Style</h1>
        <p className="App-intro">
          Click on each image once. Sound easy?  Wait until they start shifting around!
        </p>
        </header>
      <GameBody />
      </div>
    );
  }
}


export default App;
