import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { makeGuess } from '../actions/game'
import './NewGameButton.css'

export class NewGameButton extends PureComponent {
  static propTypes = {
    makeGuess: PropTypes.func.isRequired,
  }

  handleSubmit = (event) => {
    // if(event.which === 13){
    //     return false;
    // }
    let letter = []
    letter.push(event.target.value)
    this.props.makeGuess(letter)
  }

//   handleChange = (event) => {
//     if(event.which === 13){
//         return false;
//     }
//     let letter = []
//     letter.push(event.target.value)
//     this.props.makeGuess(letter)
//   }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <label>
              Next Guess:
              <input type="text" />
          </label>
        </form>
        
    );
  }
}



export default connect(null, { makeGuess })(NewGameButton)