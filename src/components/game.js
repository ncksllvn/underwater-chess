import React from 'react'
import Board from './board'
import LoadingIndicator from './loading-indicator'
import {RESULTS} from '../constants'

export default class Game extends React.Component {

    componentWillMount(){
        this.props.getBoardInfo()
    }

    componentDidUpdate(){
        if (this.props.board.isGameOver){
            this.declareWinner()
        }
    }

    shouldComponentUpdate(){
        return !this.props.board.isGameOver
    }

    declareWinner(){

        let message = ''

        switch (this.props.board.result){
            case RESULTS.whiteWins:
                message = 'You win!'
                break

            case RESULTS.blackWins:
                message = 'Computer wins!'
                break

            case RESULTS.tie:
            default:
                message = 'Tie!'
        }

        // delay the message so that the user has time to see the board first
        setTimeout(() => alert(message), 3000)
    }

    render(){

        return (
            <div className="wrapper">
                {this.props.isInitialized ? <Board board={this.props.board}/> : ''}
                {!this.props.isInitialized || this.props.isAwaitingBoardInfo ? <LoadingIndicator/> : '' }
            </div>
        )
    }

}
