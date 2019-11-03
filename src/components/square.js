import React from 'react'
import {SYMBOLS} from '../constants'

export default class Square extends React.Component {

    render(){
        return (
            <div onClick={this.onClick} className={this.classList()}>
                {this.props.symbol ? SYMBOLS[this.props.symbol] : ''}
            </div>
        )
    }

    classList(){
        return [
            'square',
            this.props.isActive ? 'active' : '',
            this.props.isLegalMoveForActiveSquare ? 'legal' : '',
            this.props.isMovable ? 'movable' : '',
            this.props.symbol && this.props.symbol === this.props.symbol.toUpperCase() ? 'white-piece' : ''
        ].join(' ')
    }

    onClick = (event) => {

        if (this.props.isLegalMoveForActiveSquare){
            this.props.makeMove()
            return
        }

        this.props.isActive ? this.props.clearActiveSquare() : this.props.setAsActiveSquare()
    }

}
