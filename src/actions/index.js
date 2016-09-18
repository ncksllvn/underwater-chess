require('es6-promise').polyfill()
require('isomorphic-fetch')

import config from 'config'

export const UPDATE_BOARD = 'UPDATE_BOARD'

export function getBoardInfo(fen='', move=''){
    return function(dispatch, getState){

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

export function updateBoard(board){
    return {
        type: UPDATE_BOARD,
        board
    }
}