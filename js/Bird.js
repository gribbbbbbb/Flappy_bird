class Bird {
  constructor(canvas, context, imgURL) {
    this.canvas = canvas
    this.context = context
    this.imgURL = imgURL
    this.birdImage = new Image();
    this.birdImage.src = imgURL;

    this.animation = [
      { sX: 432, sY: 0 },
      { sX: 432, sY: 37 },
      { sX: 276, sY: 164 }
    ];
    this.size = [52, 36]
    this.x = 215
    this.y = 384;
    this.radius = 12;
    
    // константы для осуществения анимации
    this.frame = 0;
    this.direction = 1;
    this.rotation = 0;
  }

  render() {
    const bird = this.animation[this.frame];

    //this.context.save();
    
    this.context.translate(this.x, this.y);
    //this.context.rotate(this.rotation);
    this.context.drawImage(this.birdImage,
      bird.sX, bird.sY, this.size[0], this.size[1],
      -this.size[0] / 2, -this.size[1] / 2, this.size[0], this.size[1]
    );

    //this.context.restore();
  }
}
export { Bird };