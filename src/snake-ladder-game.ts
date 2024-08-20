interface Position {
    index: number;
  }
  
class CellLocation implements Position {
    public index: number;
    constructor(index = 1) {
        this.index = index;
    }

    public getCurrentPosition(): number {
        return this.index;
    }

    public setPosition(index: number): void {
        this.index = index;
    }
}

class Player {
    private id: string;
    private name: string;
    private location: CellLocation;

    constructor(name: string) {
        this.name = name;
        this.id = new Date().getTime().toString();
        this.location = new CellLocation();
    }

    public getName(): string {
        return this.name;
    }

    public getLocation(): number {
        return this.location.getCurrentPosition();
    }

    public setLocation(index: number): void {
        this.location.setPosition(index);
    }
}

class Dice {
    private diceCount: number;
    constructor(diceCount: number) {
        this.diceCount = diceCount;
    }

    public rollDice(): number {
        return Math.floor(Math.random() * (6 * this.diceCount)) + 1;
    }
}

class CellTransporter {
    private to: CellLocation;
    private from: CellLocation;
    private isSnake: boolean;
    private isLadder: boolean;

    constructor(to: number, from: number, isSnake: boolean, isLadder: boolean) {
        this.to = new CellLocation(to);
        this.from = new CellLocation(from);
        this.isLadder = isLadder;
        this.isSnake = isSnake;
    }

    public getTo(): number {
        return this.to.getCurrentPosition();
    }

    public getFrom(): number {
        return this.from.getCurrentPosition();
    }

    public isSnakeTransporter(): boolean {
        return this.isSnake;
    }

    public isLadderTransporter(): boolean {
        return this.isLadder;
    }
}

class Board {
    private size: number;
    private board: CellTransporter[];

    constructor(size: number) {
        this.size = size;
        this.board = [];
    }

    public getSize(): number {
        return this.size;
    }

    public addTransporter(
        to: number,
        from: number,
        isSnake: boolean,
        isLadder: boolean
    ): void {
        this.board.push(new CellTransporter(to, from, isSnake, isLadder));
    }

    public getNewPosition(position: number): number {
        for (let transporter of this.board) {
            if (transporter.getFrom() === position) {
                return transporter.getTo();
            }
        }
        return position;
    }
}

export class Game {
    private board: Board;
    private players: Player[];
    private dice: Dice;
    private currentPlayerIndex: number;

    constructor(boardSize: number, players: string[], diceCount: number) {
        this.board = new Board(boardSize);
        this.players = players.map((playerName) => new Player(playerName));
        this.dice = new Dice(diceCount);
        this.currentPlayerIndex = 0;
    }

    public addSnake(head: number, tail: number): void {
        this.board.addTransporter(tail, head, true, false);
    }

    public addLadder(bottom: number, top: number): void {
        this.board.addTransporter(top, bottom, false, true);
    }

    private rollDice(): number {
        return this.dice.rollDice();
    }

    private movePlayer(player: Player, steps: number): void {
        let newPosition = player.getLocation() + steps;
        if (newPosition > this.board.getSize()) {
            newPosition = this.board.getSize() - (newPosition - this.board.getSize());
        }
        newPosition = this.board.getNewPosition(newPosition);
        player.setLocation(newPosition);
    }

    public playTurn(): boolean {
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

    public startGame(): void {
        let gameWon = false;
        while (!gameWon) {
            gameWon = this.playTurn();
        }
    }
}


  