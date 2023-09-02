import { Config } from "./Config.js"
import { Background } from "./Background.js"
import { Ground } from "./Ground.js"
import { Bird } from "./Bird.js"
import { Game } from "./Game.js"
document.addEventListener("DOMContentLoaded", ()=> {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const imgURL = "https://t1.daumcdn.net/cfile/tistory/261D8743530C9FBD35?original"
    const gameSprites = new Image();
    gameSprites.src = imgURL;


    const config = new Config()
    const background = new Background(canvas, context, gameSprites, config.bgSource, config.bgResult);
    const ground = new Ground(canvas, context, gameSprites, config.groundSource, config.groundFirstResult, config.groundSecondResult)
    const bird = new Bird(canvas, context, gameSprites, config.birdFrames, config.birdSize, config.birdResult)
    const game = new Game(background, ground, bird)

    const gameLoop = () => {
        game.updateAll();
        game.renderAll();
        requestAnimationFrame(gameLoop);
    }
    
    gameLoop();
})