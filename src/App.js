import React, { Component } from 'react';
import './App.css';
import NewGameButton from './components/NewGameButton';
import GuessBox from './components/GuessBox';
import Word from './components/Word';
import Guesses from './components/Guesses';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Hangman!</h1>
        <Word />
        <Guesses />
        <div className="actions">
          <GuessBox />
          <NewGameButton/>
        </div>
        <footer>
          <p>Week 3 assignment for Codaisseur Academy Using React and Redux - Nikolaos Ouvenis</p>
    </footer>
      </div>
    );
  }
}

export default App;
