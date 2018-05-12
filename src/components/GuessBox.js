import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { makeGuess } from '../actions/game'
import { gameFinished, isWinner } from '../lib/game'
import './GuessBox.css'

export class GuessBox extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired,    
    letters: PropTypes.arrayOf(PropTypes.string).isRequired,
    makeGuess: PropTypes.func.isRequired,
    finished: PropTypes.bool.isRequired,
    winner: PropTypes.bool.isRequired
  }

  handleSubmit = (event) => {
    const { letters } = this.props
    const letter = event.target.value
    if(event.which === 13){
         return false;
    }
    if(letter === "" || letter.length > 1)
    {
      return false;
    }

  }

  handleChange = (event) => {
    const { letters } = this.props
    const letter = event.target.value
    if(event.which === 13){
        return false;
    }
    if(letter === "")
    {
      return false;
    }
    else
    {
      letters.push(event.target.value)
      this.props.makeGuess(letters)
      event.target.value = ""
    }
  }

  render() {
    const { word, finished, winner } = this.props
    if(finished)
    { 
      if(winner && word.length > 0)
      {
        return(<h2>YOU WON! Click on New Game to play again!</h2>)
      }
      else if(word.length > 0)
      {
        return (<h2>YOU LOST! Click on New Game to play again!</h2>);
      }
      else
      {
        return (<h2>Click on New Game to play!</h2>);
      }

    }
    else
    {
      return (
        <form onSubmit={this.handleSubmit}>
          <label className="GuessBox">Next Guess: <input type="text" size="1" onChange={this.handleChange}/></label>
        </form>
        
      );
    }
  }
}

const mapStateToProps = ({ word, letters }) => ({
  word,
  letters,
  finished: gameFinished(word,letters),
  winner: isWinner(word,letters)
});

//export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
export default connect(mapStateToProps, { makeGuess })(GuessBox)