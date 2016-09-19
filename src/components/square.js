import React from 'react'

const king = 'k'
const queen = 'q'
const bishop = 'b'
const knight = 'n'
const rook = 'r'
const pawn = 'p'

const symbols = {
    [king]: '\u265A',
    [queen]: '\u265B',
    [rook]: '\u265C',
    [bishop]: '\u265D',
    [knight]: '\u265E',
    [pawn]: '\u265F'
}

export default React.createClass({

    render(){
        return (
            <div onClick={this.onClick} className={this.classList()}>
                {this.props.symbol ? symbols[this.props.symbol.toLowerCase()] : ''}
            </div>
        )
    },

    classList(){
        return [
            'square',
            this.props.isActive ? 'active' : '',
            this.props.isLegalMoveForActiveSquare ? 'legal' : '',
            this.props.isMovable ? 'movable' : '',
            this.props.symbol && this.props.symbol == this.props.symbol.toUpperCase() ? 'white-piece' : ''
        ].join(' ')
    },

    onClick(event){

        if (this.props.isLegalMoveForActiveSquare){
            this.props.makeMove()
            return
        }

        this.props.isActive ? this.props.clearActiveSquare() : this.props.setAsActiveSquare()
    }

})
