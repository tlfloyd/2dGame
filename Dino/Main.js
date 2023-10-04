import { Player } from './Player.js';
import { InputHandler} from './Input.js';

window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1000;
    canvas.height = 1000;
    let gameFrame = 0;
    let staggerFrames = 2;

    class Game{
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.player = new Player(this);
            this.input = new InputHandler();
        }
        update(){
            this.player.update(this.input.keys);
        }
        draw(context){
            this.player.draw(context);
        }
    }

    const game = new Game(canvas.width, canvas.height);
    console.log(game);

    function animate(){
        ctx.clearRect(0,0, canvas.width, canvas.height);
        game.update();
        game.draw(ctx);
        if (gameFrame % staggerFrames == 0){
            if (game.player.frameX < 6) game.player.frameX++;
            else game.player.frameX = 0;
        }
        gameFrame++;
        requestAnimationFrame(animate);
    }
    animate();

    //TESTING//
    //hello//
});