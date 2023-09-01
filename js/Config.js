class Config {
  //bird
  birdAnimation = []
  birdSize = 0
  birdFrame = 0
  birdX = 0
  birdY = 0


  //bg
  bgSource = {
    x: 0,
    y: 0,
    width: 288,
    height: 512,
  };
  bgResult = {
    x: 0,
    y: 0,
    width: canvas.width,
    height: canvas.height,
  };

  //ground
  groundSource = {
    x: 320,
    y: 0,
    width: 270,
    height: 112,
  }
  groundFirstResult = {
    x: 0,
    y: 605,
    width: canvas.width,
    height: 200,
  }
  groundSecondResult = {
    x: -5,
    y: 605,
    width: canvas.width,
    height: 200,
  }
}

export { Config };