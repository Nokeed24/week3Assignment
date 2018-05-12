import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Guesses.css'
import { wrongGuessCount, gameFinished } from '../lib/game'

export class Guesses extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired,    
    letters: PropTypes.arrayOf(PropTypes.string).isRequired,
    count: PropTypes.number.isRequired,
    finished: PropTypes.bool.isRequired
  }

  render() {
    const { count, finished } = this.props
    const wrongAttempts = count
    if(finished)
    {
      return(<span></span>)
    }
    else
    {
      return (
        <div className="Guesses">
        <span>Wrong Atempts: {wrongAttempts}</span>      
        </div>
      )
    } 
  }
}

const mapStateToProps = ({ word, letters }) => ({
  word,
  letters,
  count: wrongGuessCount(word,letters),
  finished: gameFinished(word,letters)
})

export default connect(mapStateToProps)(Guesses)