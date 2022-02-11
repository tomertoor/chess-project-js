/**
 @constructor
 @abstract
 */
class Piece {
    #type;
    #position;

    constructor(type, position) {
        if(this.type == Piece)
        {
            throw new Error("You are trying to create abstract xD")
        }
        else
        {
            this.#type = type;
            this.#position = position;
        }
    }

    getType() {
        return this.#type;
    }

    getPosition() {
        return this.#position;
    }
    
    checkValidMove() {
        throw new Error('Abstract');
    }
}

class Rook extends Piece {
    constructor(type, position) {
        super(type, position);
    }
    checkValidMove(dest) {
        
    }
}

class Pawn extends Piece {
    constructor(type, position) {
        super(type, position);
    }
    checkValidMove(dest) {

    }
}

class Knight extends Piece {
    constructor(type, position) {
        super(type, position);
    }
    checkValidMove(dest) {

    }
}

class Queen extends Piece {
    constructor(type, position) {
        super(type, position);
    }
    checkValidMove(dest) {

    }
}

class Bishop extends Piece {
    constructor(type, position) {
        super(type, position);
    }
    checkValidMove(dest) {

    }
}

class King extends Piece {

    #isChecked;

    constructor(type, position) {
        super(type, position);
    }
    checkValidMove(dest) {

    }
}

export {Piece, Rook, Pawn, Knight, Queen, Bishop, King}