class Background {
  constructor(canvas, context, gameSprites, bgSource, bgResult) {
    this.canvas = canvas
    this.context = context
    this.gameSprites = gameSprites

    this.bgSource = bgSource
    this.bgResult = bgResult
  }

  render() {
    this.context.drawImage(
      this.gameSprites,
      this.bgSource.x, this.bgSource.y, this.bgSource.width, this.bgSource.height,
      this.bgResult.x, this.bgResult.y, this.bgResult.width, this.bgResult.height
    );
  }
}
export { Background };

