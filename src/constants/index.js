const king = 'k'
const queen = 'q'
const bishop = 'b'
const knight = 'n'
const rook = 'r'
const pawn = 'p'

export const SYMBOLS = {
    [king]: '\u265A',
    [queen]: '\u265B',
    [rook]: '\u265C',
    [bishop]: '\u265D',
    [knight]: '\u265E',
    [pawn]: '\u265F'
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