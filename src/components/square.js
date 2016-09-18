import React from 'react'

const white = {
    king: '\u2654',
    queen: '\u2655',
    rook: '\u2656',
    bishop: '\u2657',
    knight: '\u2658',
    pawn: '\u2659'
}

const black = {
    king: '\u265A',
    queen: '\u265B',
    rook: '\u265C',
    bishop: '\u265D',
    knight: '\u265E',
    pawn: '\u265F',
}

const pieces = {
    K: white.king,
    Q: white.queen,
    R: white.rook,
    B: white.bishop,
    N: white.knight,
    P: white.pawn,
    k: black.king,
    q: black.queen,
    r: black.rook,
    b: black.bishop,
    n: black.knight,
    p: black.pawn
}

export default React.createClass({

    getDefaultProps(){
        return {
            piece: '',
            hasMovablePiece: false,
            isLegalMove: false,
            isActiveSquare: false
        }
    },

    render(){

        var className = 'board-cell'

        if (this.props.isLegalMove){
            className += ' is-legal-move'
        }
        else if (this.props.isActiveSquare){
            className += ' is-active-square'
        }

        return (
            <div className={className} {...this.props}>{pieces[this.props.piece]}</div>
        )
    }

})