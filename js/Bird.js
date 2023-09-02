class Bird {
  constructor(canvas, context, gameSprites, birdFrames, birdSize, birdResult) {
    this.canvas = canvas;
    this.context = context;
    this.gameSprites = gameSprites;
    this.birdFrames = birdFrames;
    this.birdSize = birdSize;
    this.frameIndex = 0;
    this.birdResult = birdResult
  }

  render() {
    debugger
    const currentFrame = this.birdFrames[this.frameIndex];
    this.context.drawImage(
      this.gameSprites,
      currentFrame.sX, currentFrame.sY, this.birdSize[0], this.birdSize[1],
      this.birdResult.x, this.birdResult.y, this.birdResult.width, this.birdResult.height
    );
  }

  update() {
    this.frameIndex++;
    if (this.frameIndex >= this.birdFrames.length) {
      this.frameIndex = 0;
    }
  }
}
export { Bird };