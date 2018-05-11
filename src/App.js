import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewGameButton from './components/NewGameButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Hangman!</h1>
        <div className="actions">
          <NewGameButton/>
        </div>
      </div>
    );
  }
}

export default App;
