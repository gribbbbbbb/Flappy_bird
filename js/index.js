import { Config } from "./Config.js"
import { Background } from "./Background.js"
import { Ground } from "./Ground.js"
import { Bird } from "./Bird.js"
import { Renderer } from "./Renderer.js"
document.addEventListener("DOMContentLoaded", ()=> {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const imgURL = "../images/atlas.png"
    const gameSprites = new Image();
    gameSprites.src = imgURL;


    const config = new Config()
    const background = new Background(canvas, context, gameSprites, config.bgSource, config.bgResult);
    const ground = new Ground(canvas, context, gameSprites, config.groundSource, config.groundFirstResult, config.groundSecondResult)
    const bird = new Bird(canvas, context, imgURL)
    const renderer = new Renderer(background, ground, bird)

    renderer.renderAll()
})