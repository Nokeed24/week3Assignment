// src/actions/game.js

import { NEW_GAME, MAKE_GUESS } from './types'
import { randomWord } from '../lib/game'

export const newGame = () => {
    //const [board, locked] = fillBoard(rows)
    const letters = []
    const word = randomWord()
    return {
        type: NEW_GAME,
        payload: {
            word,
            letters
        }
    }
}

export const makeGuess = (letters) => {
    return {
      type: MAKE_GUESS,
      payload: {
          letters
      }
    }
  }
