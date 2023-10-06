class Layer{
    constructor(game, width, height, image){
        this.game = game;
        this.width = width;
        this.height = height;
        this.scrollSpeed = 5;
        this.image = image;
        this.x = 0;
        this.y = 0;
    }
    update(vx){
        if (this.x < -this.width) this.x = 0;
        else if (this.x > this.width) this.x = 0;
        // else this.x -= this.scrollSpeed;

        if (vx > 0) this.x -= this.scrollSpeed;
        else if (vx < 0) this.x += this.scrollSpeed;
    }
    draw(context){
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
        context.drawImage(this.image, this.x - this.width, this.y, this.width, this.height);
    }
}

export class Background {
    constructor(game) {
        this.game = game;
        this.width = 1730;
        this.height = 970;
        this.backgroundImage = document.getElementById('background');
        this.groundImage = document.getElementById('ground');
        this.layerBack = new Layer(this.game, this.width, this.height, this.backgroundImage);
        this.layerGround = new Layer(this.game, this.width, this.height + 100, this.groundImage);
        this.backgroundLayers = [this.layerBack, this.layerGround];
    }
    update(vx){
        this.backgroundLayers.forEach(layer => {
            layer.update(vx);
        })
    }
    draw(context){
        this.backgroundLayers.forEach(layer => {
            layer.draw(context);
        })
    }
}