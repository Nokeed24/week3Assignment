import { MAKE_GUESS } from '../actions/types'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case MAKE_GUESS:
        const newletters = state.letters.concat(payload.letters)
        return newletters
    default: 
        return state
  }
}