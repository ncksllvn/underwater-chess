require('es6-promise').polyfill()

import 'isomorphic-fetch'
import config from 'config'

export const AWAIT_BOARD_INFO = 'AWAIT_BOARD_INFO'
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

        dispatch(awaitBoardInfo())

        return fetch(url, options).
            then(res => res.json()).
            then(board => dispatch(updateBoard(board)))
    }
}

export function makeMove(toSquare){
    return function(dispatch, getState){

        const fromSquare = getState().activeSquareId
        const move = `${fromSquare}${toSquare}`

        return dispatch(getBoardInfo(move)).
            then(() => dispatch(doComputerMove()))
    }
}

export function doComputerMove(){
    return function(dispatch, getState){

        const bestMove = getState().board.turn.bestMove

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                dispatch(getBoardInfo(bestMove)).then(resolve)
            }, 1000)
        })
    }
}

export function awaitBoardInfo(){
    return {
        type: AWAIT_BOARD_INFO
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
