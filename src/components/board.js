import React from 'react'
import Square from '../containers/square'

const cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const rows = [8, 7, 6, 5, 4, 3, 2, 1]

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

const symbols = {
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


export default function({board}) {

    // convert from FEN to a 2D array
    board = parseFen(board.fen)

    return (
        <div className="board">
            {rows.map((row, rowIndex) =>
                <div className="board-row" key={row}>
                    {cols.map((col, colIndex) =>
                        <Square id={`${col}${row}`} key={col}>
                            {symbols[board[rowIndex][colIndex]]}
                        </Square>
                    )}
                </div>
            )}
        </div>
    )
}

function parseFen(fen) {

    const boardFen = fen.split(' ')[0]
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
}
