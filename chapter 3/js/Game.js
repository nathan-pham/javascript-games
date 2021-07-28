export default class Game {
    constructor({container=document.body}={}) {
        this.container = typeof container == "string" ? document.querySelector(container) : container
        this.createCanvas()
    }

    createCanvas() {
        this.canvas = document.createElement("canvas")
        this.ctx = this.canvas.getContext("2d")
        this.container.appendChild(this.canvas)
    }
}