export class Player {
    contructor(){
        //this.game = game;
        this.width = 100;
        this.height = 100;
        this.x = 0;
        this.y = 100;
    }
    update(){

    }
    draw(context){
        // context.fillStyle = 'red';
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}