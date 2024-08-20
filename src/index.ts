import { Game } from './snake-ladder-game';
const game = new Game(100, ["Alice", "Bob"], 1);

// Add snakes
game.addSnake(98, 40);
game.addSnake(92, 72);
game.addSnake(71, 25);
game.addSnake(62, 19);

// Add ladders
game.addLadder(2, 38);
game.addLadder(7, 14);
game.addLadder(8, 31);
game.addLadder(15, 26);

game.startGame();