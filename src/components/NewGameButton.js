import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { randomWord } from '../lib/game'
import './NewGameButton.css'

export class NewGameButton extends PureComponent {
  static propTypes = {
    NewGame: PropTypes.func.isRequired,
    label: PropTypes.string
  }

  handleClick = () => {
    this.props.randomWord()
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        className="NewGameButton"
      >
        { this.props.label || 'New Game' }
      </button>
    )
  }
}

export default connect(null, { randomWord })(NewGameButton)