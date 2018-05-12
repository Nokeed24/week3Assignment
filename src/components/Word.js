import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Word extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired    
  }

  
  

  render() {
    return (
      <div className="Word">
        <p>{this.props.word}</p>
      </div>
    )
  }
}

const mapStateToProps = ({ word }) => ({
  word
})

export default connect(mapStateToProps)(Word)