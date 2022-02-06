import {Piece, Rook, Pawn, Knight, Queen, Bishop, King} from './pieces.js'

const BOARD_SIZE = 10;

class Board {
    #board;

    constructor(boardStr)
    {
        for(let i = 0; i < BOARD_SIZE; i++) {
            switch(this.#board[i * BOARD_SIZE + i])
            {
                case 'B':
                case 'b':
                    this.#board[i * BOARD_SIZE + i] = new Bishop(this.#board[i * BOARD_SIZE + i], {x: i % BOARD_SIZE, y: (i - (i % BOARD_SIZE)) / BOARD_SIZE});
                    break;
                case 'R':
                case 'r':
                    this.#board[i * BOARD_SIZE + i] = new Rook(this.#board[i * BOARD_SIZE + i], {x: i % BOARD_SIZE, y: (i - (i % BOARD_SIZE)) / BOARD_SIZE});
                    break;
                case 'N':
                case 'n':
                    this.#board[i * BOARD_SIZE + i] = new Knight(this.#board[i * BOARD_SIZE + i], {x: i % BOARD_SIZE, y: (i - (i % BOARD_SIZE)) / BOARD_SIZE});
                    break;
                case 'B':
                case 'b':
                    this.#board[i * BOARD_SIZE + i] = new Bishop(this.#board[i * BOARD_SIZE + i], {x: i % BOARD_SIZE, y: (i - (i % BOARD_SIZE)) / BOARD_SIZE});
                    break;
                case 'Q':
                case 'q':
                    this.#board[i * BOARD_SIZE + i] = new Queen(this.#board[i * BOARD_SIZE + i], {x: i % BOARD_SIZE, y: (i - (i % BOARD_SIZE)) / BOARD_SIZE});
                    break;
                case 'K':
                case 'k':
                    this.#board[i * BOARD_SIZE + i] = new King(this.#board[i * BOARD_SIZE + i], {x: i % BOARD_SIZE, y: (i - (i % BOARD_SIZE)) / BOARD_SIZE});
                    break;        
            }
        }
    }

    makeBoard() {
        let boardStr = "";
        for(let row in this.#board) {
            for(let col in row) {
                boardStr += col.getType();
            }
        }
        return boardStr;
    }
}