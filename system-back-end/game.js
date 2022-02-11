

class Game {
    #gameId;
    #board;

    constructor(gameId, board)
    {
        this.#gameId = gameId;
        this.#Board = board;
    }

    getGameId()
    {
        return this.#gameId;
    }

    getBoard()
    {
        return this.#board;
    }
}