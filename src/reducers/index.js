import {combineReducers} from 'redux'
import {UPDATE_BOARD, UPDATE_ACTIVE_SQUARE} from '../actions'

const initialState = {
    board: {},
    activeSquareId: ''
}

function activeSquareId(state=initialState.activeSquareId, action){
    switch (action.type){
        case UPDATE_ACTIVE_SQUARE:
            return action.squareId
        default:
            return state
    }
}

function board(state=initialState.board, action){
    switch (action.type){
        case UPDATE_BOARD:
            return action.board
        default:
            return state
    }
}

export default combineReducers({ board, activeSquareId })