import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Word.css'
import { showGuess } from '../lib/game'

export class Guesses extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired,    
    letters: PropTypes.arrayOf(PropTypes.string).isRequired,
    show: PropTypes.string.isRequired
  }

  render() {
    const {show, wordDisplayed, guesses } = this.props
    var wordArray = show
    return (
       <div className="Word">
        <ul>
          {wordArray}
        </ul>      
       </div>
    )
  }
}

const mapStateToProps = ({ word, letters }) => ({
  word,
  letters,
  show: showGuess(word,letters)
})

export default connect(mapStateToProps)(Guesses)