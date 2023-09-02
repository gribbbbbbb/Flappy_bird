class Game {
  constructor(background, ground, bird) {
    this.background = background
    this.ground = ground
    this.bird = bird
  }
  
  renderAll() {
    this.background.render()
    this.ground.render()
    this.bird.render()
  }

  updateAll() {
    this.bird.update()
  }
}

export { Game };