export default class Square {
    x = 0
    y = 0

    update() {
        this.x += 1
    }

    render({ctx}) {
        ctx.fillStyle = "#000"
        ctx.fillRect(this.x, this.y, 50, 50)
    }
}