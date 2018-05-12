import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { makeGuess } from '../actions/game'
import './GuessBox.css'

export class GuessBox extends PureComponent {
  static propTypes = {
    makeGuess: PropTypes.func.isRequired,
    letters: PropTypes.arrayOf(PropTypes.string).isRequired
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
    //let letter = letters
    //letters.push(event.target.value)
    //this.props.makeGuess(letters)
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
    return (
      <form onSubmit={this.handleSubmit}>
          <label>Next Guess: <input type="text" size="1" onChange={this.handleChange}/></label>
        </form>
        
    );
  }
}

const mapStateToProps = ({ letters }) => ({
  letters
});

//export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
export default connect(mapStateToProps, { makeGuess })(GuessBox)