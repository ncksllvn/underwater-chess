import React from 'react'
import Square from './square'

const cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const rows = [8, 7, 6, 5, 4, 3, 2, 1]

export default React.createClass({

    getInitialState(){
        return {
            activeSquare: ''
        }
    },

    render(){

        const board = this.getBoardAsArray()
        const legalMoves = this.getLegalMoves()

        return (
            <div className="board">
                {rows.map((row, rowIndex) =>
                    <div className="board-row" key={row}>
                        {cols.map((col, colIndex) => {

                            const squareCoords = `${col}${row}`

                            return (
                                <Square key={col}
                                    piece={board[rowIndex][colIndex]}
                                    isLegalMove={legalMoves.indexOf(squareCoords) >= 0}
                                    isActiveSquare={squareCoords == this.state.activeSquare}
                                    onMouseEnter={() => this.squareClicked(squareCoords)}/>
                            )
                        })}
                    </div>
                )}
            </div>
        )
    },

    // Convert the fen notation into a 2d array with an empty element
    // representing each empty space so that the board data easily maps
    // to the corresponding jsx
    getBoardAsArray(){

        const boardFen = this.props.board.fen.split(' ')[0]
        const boardFenRows = boardFen.split('/')

        return boardFenRows.map(row => {

            var rowExpanded = []

            for (var charIndex in row){

                let char = row[charIndex]

                if (isNaN(char)){
                    rowExpanded.push(char)
                    continue
                }

                let i = 0;
                let numEmptySpaces = parseInt(char)

                while (i++ < numEmptySpaces){
                    rowExpanded.push('')
                }
            }

            return rowExpanded
        })
    },

    getLegalMoves(){

        const square = this.state.activeSquare

        // no active square, just back out
        if (!square){
            return []
        }

        const legalMovesForSquare = this.props.board.turn.legalMoves
            .filter(move => move.slice(0,2) == square)
            .map(move => move.slice(2))

        return legalMovesForSquare
    },

    squareClicked(square){

        if (this.state.activeSquare == square){
            square = ''
        }

        this.setState({ activeSquare: square })
    }

})