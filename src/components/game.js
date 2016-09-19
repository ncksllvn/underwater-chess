import React from 'react'
import Board from './board'

const blackWins = '0-1'
const whiteWins = '1-0'
const draw = '1/2-1/2'

export default React.createClass({

    componentWillMount(){
        this.props.getBoardInfo()
    },

    componentDidUpdate(){
        if (this.props.board.isGameOver){

            // Feeling lazy so just pop up an alert when the game ends
            switch (this.props.board.result){
                case whiteWins:
                    alert('You win!')
                    break

                case blackWins:
                    alert ('Computer wins!')
                    break

                case tie:
                    alert('Tie!')
            }

        }
    },

    render(){
        return (
            <div className="wrapper">
                {this.props.isInitialized ? <Board board={this.props.board}/> : 'Loading...'}
            </div>
        )
    }
})