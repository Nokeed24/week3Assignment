import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Word.css'

export class Word extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired,    
    letters: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  render() {
    const wordDisplayed = this.props.word
    var wordArray = wordDisplayed.split('')
    console.log(wordArray)
    return (
      <div className="Word">
        <ul>
          The word is: {wordArray}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ word, letters }) => ({
  word,
  letters
})

export default connect(mapStateToProps)(Word)