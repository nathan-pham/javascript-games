import Game from "./classes/Game.js"
import Square from "./classes/Square.js"

const game = new Game({container: "#game__container"})

game.objects.push(new Square())

game.render()