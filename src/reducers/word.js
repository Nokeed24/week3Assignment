import { NEW_GAME } from '../actions/types'

export default (state = "", { type, payload } = {}) => {
    switch(type) {
        case NEW_GAME:
            return payload.word
    }
    return state
  }