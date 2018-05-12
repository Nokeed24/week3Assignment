import { NEW_GAME, MAKE_GUESS } from '../actions/types'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case NEW_GAME:
        return state
    case MAKE_GUESS:
        const newletters = [].concat(payload.letters)
        return newletters
    default: 
        return state
  }
}