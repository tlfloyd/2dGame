export class Player {
    constructor(game){
        this.game = game;
        this.width = 150;
        this.height = 100.1;
        this.x = 0;
        this.y = this.game.height - this.height;
        this.vy = 0;
        this.image = document.getElementById('player');
        this.speed = 0;
        this.maxSpeed = 10;
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
        this.y += this.vy;
    }
    draw(context){
        context.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    }
}