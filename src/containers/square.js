import React from 'react'
import {connect} from 'react-redux'
import {updateActiveSquare} from '../actions'
import Square from  '../components/square'

const mapStateToProps = (state, ownProps) => {

    const activeSquareId = state.activeSquareId
    const legalMoves = state.board.turn.legalMoves

    // Check if this square is the active and that there's at least one move
    // beginning with its id.
    const canBeMovedFrom = activeSquareId == ownProps.id &&
        legalMoves.some(move => move.slice(0,2) == ownProps.id)

    // Check if there's a move that begins with the active square's id
    // followed by this square's id
    const canBeMovedTo = legalMoves.some(move =>
        move.slice(0,2) == activeSquareId && move.slice(2) == ownProps.id)

    return {
        isActive: canBeMovedFrom && activeSquareId == ownProps.id,
        isLegalMoveForActiveSquare: canBeMovedTo
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setAsActiveSquare(){
            return dispatch(updateActiveSquare(ownProps.id))
        },
        clearActiveSquare(){
            return dispatch(updateActiveSquare(''))
        }
    }
}

const SquareContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Square)

export default SquareContainer