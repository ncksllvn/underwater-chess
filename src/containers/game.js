import React from 'react'
import {connect} from 'react-redux'
import {getBoardInfo} from '../actions'
import Game from  '../components/game'

const mapStateToProps = (state, ownProps) => {
    return {
        isInitialized: !!state.board.fen,
        board: state.board
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getBoardInfo(fen, move){
            return dispatch(getBoardInfo(fen, move))
        }
    }
}

const GameContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Game)

export default GameContainer