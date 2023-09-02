class Config {
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

  //bird
  birdFrames = [
    {sX: 528, sY: 128},
    {sX: 528, sY: 180},
    {sX: 580, sY: 322}
  ]
  birdSize = [34, 24]
  birdResult = {
    x: 175,
    y: 350,
    width: 51,
    height: 36,
  }
}

export { Config };