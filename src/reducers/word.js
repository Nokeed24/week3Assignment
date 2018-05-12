import { NEW_GAME, MAKE_GUESS } from '../actions/types'

export default (state = "", { type, payload } = {}) => {
    switch(type) {
        case NEW_GAME:
            return payload.word
        case MAKE_GUESS:
            return state
        default: 
            return state

    }

}