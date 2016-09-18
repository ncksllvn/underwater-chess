import {combineReducers} from 'redux'
import {UPDATE_BOARD} from '../actions'

const initialState = {
    board: {}
}

function board(state=initialState.board, action){
    switch (action.type){
        case UPDATE_BOARD:
            return action.board
        default:
            return state
    }
}

export default combineReducers({ board })