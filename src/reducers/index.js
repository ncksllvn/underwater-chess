import {combineReducers} from 'redux'
import {AWAIT_BOARD_INFO, UPDATE_BOARD, UPDATE_ACTIVE_SQUARE} from '../actions'

const initialState = {
    board: {},
    activeSquareId: '',
    isAwaitingBoardInfo: false
}

function isAwaitingBoardInfo(state=initialState.isAwaitingBoardInfo, action){
    switch (action.type){
        case AWAIT_BOARD_INFO:
            return true
        case UPDATE_BOARD:
            return false
        default:
            return state
    }
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

export default combineReducers({ board, activeSquareId, isAwaitingBoardInfo })