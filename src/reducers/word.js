import { NEW_GAME, MAKE_GUESS } from '../actions/types'

export default (state = "", { type, payload } = {}) => {
    switch(type) {
        case NEW_GAME:
            return payload.word
        default: 
            return state

    }

}