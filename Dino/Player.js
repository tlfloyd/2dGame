export class Player {
    constructor(game){
        this.game = game;
        this.width = (6876 / 12) + 2;
        this.height = 5230 / 10;
        this.x = 0;
        this.y = this.game.height - this.height;
        this.vy = 0;
        this.weight = 1;
        this.image = document.getElementById('player');
        this.speed = 0;
        this.maxSpeed = 10;
        this.frameX = 0;
        this.frameY = 0;
    }
    update(inputs){
        //Horizontal Movement
        this.x += this.speed;
        if (inputs.includes('ArrowRight')) this.speed = this.maxSpeed;
        else if (inputs.includes('ArrowLeft')) this.speed = -this.maxSpeed;
        else this.speed = 0;

        //Boundaries
        if (this.x < 0) this.x = 0;
        if (this.x > this.game.width - this.width) this.x = this.game.width - this.width;

        //Vertical Movement
        if (inputs.includes('ArrowUp') && this.onGround()) this.vy -= 20;
        this.y += this.vy;
        if (!this.onGround()) this.vy += this.weight;
        else this.vy = 0;
    }
    draw(context){
        context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
    }
    onGround(){
        return this.y >= this.game.height - this.height;
    }
}