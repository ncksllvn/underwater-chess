require('es6-promise').polyfill()

import 'isomorphic-fetch'
import config from 'config'

export const UPDATE_ACTIVE_SQUARE = 'UPDATE_ACTIVE_SQUARE'
export const UPDATE_BOARD = 'UPDATE_BOARD'

export function getBoardInfo(move=''){
    return function(dispatch, getState){

        const fen = getState().board.fen || ''
        const fenParam = encodeURIComponent(fen)
        const url = `${config.api}/game?fen=${fenParam}&move=${move}`
        const options = {
            method: 'get',
            mode: 'cors'
        }

        return fetch(url).
            then(res => res.json()).
            then(board => dispatch(updateBoard(board)))
    }
}

export function makeMove(toSquare){
    return function(dispatch, getState){

        const fromSquare = getState().activeSquareId
        const move = `${fromSquare}${toSquare}`

        return dispatch(getBoardInfo(move))
    }
}

export function updateActiveSquare(squareId=''){
    return {
        type: UPDATE_ACTIVE_SQUARE,
        squareId
    }
}

export function updateBoard(board){
    return {
        type: UPDATE_BOARD,
        board
    }
}