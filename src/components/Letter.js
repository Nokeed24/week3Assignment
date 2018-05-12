import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Word.css'

export class Letter extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired    
  }

  
  

  render() {
    const wordDisplayed = this.props.word
    var wordArray = wordDisplayed.split('')
    console.log(wordArray)
    return (
      <div className="Word">
        <ul>
          {wordArray.map((letter, index) => {<span key={index} letter />})}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ word }) => ({
  word
})

export default connect(mapStateToProps)(Letter)