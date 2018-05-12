import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { makeGuess } from '../actions/game'

export class Word extends PureComponent {
  static propTypes = {
    value: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    makeMove: PropTypes.func.isRequired,
    locked: PropTypes.bool,
    dupe: PropTypes.bool,
    error: PropTypes.bool
  }

  
  

  render() {
    return (
      <div
        className={this.classNames()}
        onClick={this.handleClick}
      />
    )
  }
}

const mapStateToProps = ({ word }, { x, y }) => ({
  locked: locked.filter(l => l[0] === y && l[1] === x).length > 0
})

export default connect(mapStateToProps, { makeMove: move })(Word)