class Ground {
  constructor(canvas, context, gameSprites, groundSource, groundFirstResult, groundSecondResult) {
    this.canvas = canvas
    this.context = context
    this.gameSprites = gameSprites

    this.groundSource = groundSource
    this.groundFirstResult = groundFirstResult
    this.groundSecondResult = groundSecondResult

    this.speed = 3.3;
    this.offsetX = 0;
  }


  render() {
    this.offsetX -= this.speed;

    if (this.offsetX <= -this.groundFirstResult.width) {
        this.offsetX = 0;
    }
  
    this.context.drawImage(
      this.gameSprites,
      this.groundSource.x, this.groundSource.y, this.groundSource.width, this.groundSource.height,
      this.groundFirstResult.x + this.offsetX, this.groundFirstResult.y, this.groundFirstResult.width, this.groundFirstResult.height
    );

    this.context.drawImage(
      this.gameSprites,
      this.groundSource.x, this.groundSource.y, this.groundSource.width, this.groundSource.height,
      this.groundSecondResult.x + this.offsetX + this.groundFirstResult.width, this.groundSecondResult.y, this.groundSecondResult.width, this.groundSecondResult.height
    );

    //requestAnimationFrame(this.render.bind(this));
  }
}


export { Ground };