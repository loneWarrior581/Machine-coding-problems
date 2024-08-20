"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
class CellLocation {
    constructor(index = 1) {
        this.index = index;
    }
    getCurrentPosition() {
        return this.index;
    }
    setPosition(index) {
        this.index = index;
    }
}
class Player {
    constructor(name) {
        this.name = name;
        this.id = new Date().getTime().toString();
        this.location = new CellLocation();
    }
    getName() {
        return this.name;
    }
    getLocation() {
        return this.location.getCurrentPosition();
    }
    setLocation(index) {
        this.location.setPosition(index);
    }
}
class Dice {
    constructor(diceCount) {
        this.diceCount = diceCount;
    }
    rollDice() {
        return Math.floor(Math.random() * (6 * this.diceCount)) + 1;
    }
}
class CellTransporter {
    constructor(to, from, isSnake, isLadder) {
        this.to = new CellLocation(to);
        this.from = new CellLocation(from);
        this.isLadder = isLadder;
        this.isSnake = isSnake;
    }
    getTo() {
        return this.to.getCurrentPosition();
    }
    getFrom() {
        return this.from.getCurrentPosition();
    }
    isSnakeTransporter() {
        return this.isSnake;
    }
    isLadderTransporter() {
        return this.isLadder;
    }
}
class Board {
    constructor(size) {
        this.size = size;
        this.board = [];
    }
    getSize() {
        return this.size;
    }
    addTransporter(to, from, isSnake, isLadder) {
        this.board.push(new CellTransporter(to, from, isSnake, isLadder));
    }
    getNewPosition(position) {
        for (let transporter of this.board) {
            if (transporter.getFrom() === position) {
                return transporter.getTo();
            }
        }
        return position;
    }
}
class Game {
    constructor(boardSize, players, diceCount) {
        this.board = new Board(boardSize);
        this.players = players.map((playerName) => new Player(playerName));
        this.dice = new Dice(diceCount);
        this.currentPlayerIndex = 0;
    }
    addSnake(head, tail) {
        this.board.addTransporter(tail, head, true, false);
    }
    addLadder(bottom, top) {
        this.board.addTransporter(top, bottom, false, true);
    }
    rollDice() {
        return this.dice.rollDice();
    }
    movePlayer(player, steps) {
        let newPosition = player.getLocation() + steps;
        if (newPosition > this.board.getSize()) {
            newPosition = this.board.getSize() - (newPosition - this.board.getSize());
        }
        newPosition = this.board.getNewPosition(newPosition);
        player.setLocation(newPosition);
    }
    playTurn() {
        const player = this.players[this.currentPlayerIndex];
        const diceValue = this.rollDice();
        console.log(`${player.getName()} rolled a ${diceValue}`);
        this.movePlayer(player, diceValue);
        console.log(`${player.getName()} is at position ${player.getLocation()}`);
        if (player.getLocation() === this.board.getSize()) {
            console.log(`${player.getName()} wins!`);
            return true;
        }
        this.currentPlayerIndex =
            (this.currentPlayerIndex + 1) % this.players.length;
        return false;
    }
    startGame() {
        let gameWon = false;
        while (!gameWon) {
            gameWon = this.playTurn();
        }
    }
}
exports.Game = Game;
//# sourceMappingURL=snake-ladder-game.js.map