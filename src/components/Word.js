import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Word.css'
import { showGuess, gameFinished, isWinner } from '../lib/game'

export class Word extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired,    
    letters: PropTypes.arrayOf(PropTypes.string).isRequired,
    show: PropTypes.string.isRequired,
    finished: PropTypes.bool.isRequired,
    winner: PropTypes.bool.isRequired 
  }

  render() {
    const { word ,show, finished, winner } = this.props 
    var wordArray = show
    if(finished && !winner) 
    { 
      return ( 
        <div className="Word"> 
        <span>The word was: {word}</span>       
       </div> 
 
      ) 
    } 
    return (
       <div className="Word">
        <span>{wordArray}</span>      
       </div>
    )
  }
}

const mapStateToProps = ({ word, letters }) => ({
  word,
  letters,
  show: showGuess(word,letters), 
  finished: gameFinished(word,letters),
  winner: isWinner(word,letters) 
})

export default connect(mapStateToProps)(Word)