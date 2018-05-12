import React, { Component } from 'react';
import './App.css';
import NewGameButton from './components/NewGameButton';
import GuessBox from './components/GuessBox';
import Word from './components/Word';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Hangman!</h1>
        <Word />
        <div className="actions">
          <GuessBox />
          <NewGameButton/>
        </div>
      </div>
    );
  }
}

export default App;
