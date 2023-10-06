export class Player {
    constructor(game){
        this.game = game;
        this.width = (6876 / 12) + 2;
        this.height = 5230 / 10;
        this.x = 0;
        this.y = this.game.height - this.height;
        this.vx = 0;
        this.vy = 0;
        this.weight = 1;
        this.image_right = document.getElementById('player_right');
        this.image_left = document.getElementById('player_left');
        this.maxSpeed = 10;
        this.frameX = 0;
        this.frameY = 0;
        this.facing = 1;
    }
    update(inputs){
        //Horizontal Movement
        this.x += this.vx;
        if (inputs.includes('ArrowRight')) this.vx = this.maxSpeed;
        else if (inputs.includes('ArrowLeft')) this.vx = -this.maxSpeed;
        else this.vx = 0;

        //Boundaries
        if (this.x < 0) this.x = 0;
        if (this.x > this.game.width - this.width) this.x = this.game.width - this.width;

        //Vertical Movement
        if (inputs.includes('ArrowUp') && this.onGround()) this.vy -= 20;
        this.y += this.vy;
        if (!this.onGround()) this.vy += this.weight;
        else this.vy = 0;

        if (inputs.includes('ArrowRight') && !inputs.includes('ArrowLeft')) {
            this.facing = 1;
        }
        else if (inputs.includes('ArrowLeft') && !inputs.includes('ArrowRight')) {
            this.facing = -1;
        }
        console.log(this.facing);
    }
    draw(context){
        if (this.facing == 1) {
            context.drawImage(this.image_right, this.frameX, this.frameY, this.width, this.height, this.x, this.y, this.width, this.height);
        }
        else if (this.facing == -1) {
            context.drawImage(this.image_left, 6876 - 575 - this.frameX, this.frameY, this.width, this.height, this.x, this.y, this.width, this.height);
        }
    }
    onGround(){
        return this.y >= this.game.height - this.height;
    }
}