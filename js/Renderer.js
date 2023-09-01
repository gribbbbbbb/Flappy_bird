class Renderer {
    constructor(background, ground, bird) {
        this.background = background
        this.ground = ground
        this.bird = bird
    }
    renderAll() {
        this.background.render()
        //this.bird.render()
        this.ground.render()
    }
}

export { Renderer };