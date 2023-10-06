import { Player } from './Player.js';
import { InputHandler} from './Input.js';

window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1000;
    canvas.height = 1000;
    let gameFrame = 0;
    let staggerFrames = 4;

    let playerState = 'idle';
    const spriteAnimations = [];
    const animationStates = [
        {
            name: 'idle',
            frames: 7,
        },
        {
            name: 'jump',
            frames: 7,
        },
        {
            name: 'fall',
            frames: 7,
        },
        {
            name: 'run',
            frames: 9,
        },
        {
            name: 'dizzy',
            frames: 11,
        },
        {
            name: 'sit',
            frames: 5,
        },
        {
            name: 'roll',
            frames: 7,
        },
        {
            name: 'bite',
            frames: 7,
        },
        {
            name: 'ko',
            frames: 12,
        },
        {
            name: 'getHit',
            frames: 4,
        },
    ]
    

    class Game{
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.player = new Player(this);
            this.input = new InputHandler();
        }
        update(){
            this.player.update(this.input.keys);
            if (this.player.vx === 0 && this.player.vy === 0) playerState = 'idle';
            else if (this.player.vy > 0) playerState = 'fall';
            else if (this.player.vy < 0) playerState = 'jump';
            else if (this.player.vx > 0 || this.player.vx < 0) playerState = 'run';
            if (this.input.keys.includes('ArrowDown') &&
                this.player.vy === 0 &&
                this.player.vx === 0 &&
                this.player.onGround()) {
                    playerState = 'sit';
                }
        }
        draw(context){
            this.player.draw(context);
        }
    }

    const game = new Game(canvas.width, canvas.height);
    console.log(game);

    animationStates.forEach((state, index) => {
        let frames = {
            loc: [],
        }
        for (let j = 0; j < state.frames; j++){
            let positionX = j * game.player.width;
            let positionY = index * game.player.height;
            frames.loc.push({x: positionX, y: positionY});
        }
        spriteAnimations[state.name] = frames;
    });
    console.log(spriteAnimations);

    function animate(){
        ctx.clearRect(0,0, canvas.width, canvas.height);
        
        // Determine current frame
        let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
        game.player.frameX = game.player.width * position;
        game.player.frameY = spriteAnimations[playerState].loc[position].y;

        game.update();
        game.draw(ctx);
        gameFrame++;
        requestAnimationFrame(animate);
    }
    animate();

    //TESTING TESTING
});