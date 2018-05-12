import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Guesses.css'
import { wrongGuessCount } from '../lib/game'

export class Guesses extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired,    
    letters: PropTypes.arrayOf(PropTypes.string).isRequired,
    count: PropTypes.number.isRequired
  }

  render() {
    const {word, letters, count } = this.props
    var wrongAttempts = count
    return (
      <div className="Guesses">
        <span>Wrong Atempts: {wrongAttempts}</span>      
      </div>
    )
  }
}

const mapStateToProps = ({ word, letters }) => ({
  word,
  letters,
  count: wrongGuessCount(word,letters)
})

export default connect(mapStateToProps)(Guesses)