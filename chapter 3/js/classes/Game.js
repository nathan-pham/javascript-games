export default class Game {
    constructor({container=document.body}={}) {
        this.container = typeof container == "string" ? document.querySelector(container) : container
        this.dimensions = {width: this.container.offsetWidth, height: this.container.offsetHeight}

        this.objects = []

        this.createCanvas()

        this.resize()
        document.body.addEventListener("resize", () => this.resize())
    }

    createCanvas() {
        this.canvas = document.createElement("canvas")
        this.ctx = this.canvas.getContext("2d")
        this.container.appendChild(this.canvas)
    }

    resize() {
        this.dimensions = {width: this.container.offsetWidth, height: this.container.offsetHeight}

        const px = (dimensions) => (
            Object.keys(dimensions).reduce((acc, key) => ({...acc, [key]: dimensions[key] + "px"}), {})
        )

        Object.assign(this.canvas, this.dimensions)
        Object.assign(this.canvas.style, px(this.dimensions))
    }

    render() {
        this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height)

        for(const object of this.objects) {
            if(typeof object.update == "function") {
                object.update(this)
            }

            object.render(this)
        }

        window.requestAnimationFrame(() => this.render())
    }
}