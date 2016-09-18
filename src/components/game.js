import React from 'react'
import Board from './board'

export default React.createClass({

    componentWillMount(){
        this.props.getBoardInfo()
    },

    render(){
        return (
            <div className="wrapper">
                {this.props.isInitialized ? <Board board={this.props.board}/> : 'Loading...'}
            </div>
        )
    }
})