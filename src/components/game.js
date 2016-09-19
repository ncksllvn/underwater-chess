import React from 'react'
import Board from './board'

const blackWins = '0-1'
const whiteWins = '1-0'
const tie = '1/2-1/2'

export default React.createClass({

    componentWillMount(){
        this.props.getBoardInfo()
    },

    componentDidUpdate(){
        if (this.props.board.isGameOver){
            this.declareWinner()
        }
    },

    shouldComponentUpdate(){
        return !this.props.board.isGameOver
    },

    declareWinner(){

        var message = ''

        switch (this.props.board.result){
            case whiteWins:
                message = 'You win!'
                break

            case blackWins:
                message = 'Computer wins!'
                break

            case tie:
                message = 'Tie!'
        }

        // delay the message so that the user has time to see the board first
        setTimeout(() => alert(message), 3000)
    },

    render(){
        return (
            <div className="wrapper">
                {this.props.isInitialized ? <Board board={this.props.board}/> : 'Loading...'}
            </div>
        )
    }
})