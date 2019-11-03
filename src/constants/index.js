const king = 'k'
const queen = 'q'
const bishop = 'b'
const knight = 'n'
const rook = 'r'
const pawn = 'p'

const whiteKing = 'K'
const whiteQueen = 'Q'
const whiteBishop = 'B'
const whiteKnight = 'N'
const whiteRook = 'R'
const whitePawn = 'P'

export const SYMBOLS = {
    [king]: '\u265A',
    [queen]: '\u265B',
    [rook]: '\u265C',
    [bishop]: '\u265D',
    [knight]: '\u265E',
    [pawn]: '\u265F',
    [whiteKing]: '\u2654',
    [whiteQueen]: '\u2655',
    [whiteBishop]: '\u2657',
    [whiteKnight]: '\u2658',
    [whiteRook]: '\u2656',
    [whitePawn]: '\u2659'
}

const blackWins = '0-1'
const whiteWins = '1-0'
const tie = '1/2-1/2'

export const RESULTS = {
    blackWins,
    whiteWins,
    tie
}

export const ANALYTICS_RESULTS = {
    [whiteWins]: 1,
    [blackWins]: 0,
    [tie]: -1
}
