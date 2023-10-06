export class InputHandler{
    constructor(){
        this.keys = [];
        this.facing = 1;
        window.addEventListener('keydown', e => {
            if ((   e.key === 'ArrowDown' || 
                    e.key === 'ArrowUp' ||
                    e.key === 'ArrowLeft' ||
                    e.key === 'ArrowRight'
                )   && this.keys.indexOf(e.key) === -1){
                this.keys.push(e.key);
            }
            // if (e.key === 'ArrowRight' && e.key !== 'ArrowLeft') this.facing = 1;
            // if (e.key === 'ArrowLeft' && e.key !== 'ArrowRight') this.facing = -1;
            if (this.keys.includes('ArrowRight') && !this.keys.includes('ArrowLeft'))
                this.facing = 1;
            else if (this.keys.includes('ArrowLeft') && !this.keys.includes('ArrowRight'))
                this.facing = -1;
            else if (this.keys[this.keys.length - 1] === 'ArrowRight')
                this.facing = 1;
            else if (this.keys[this.keys.length - 1] === 'ArrowLeft')
                this.facing = -1;
            console.log(e.key, this.keys);
        });
        window.addEventListener('keyup', e => {
            if (e.key === 'ArrowRight' && this.keys.includes('ArrowLeft'))
                this.facing = -1;
            if (e.key === 'ArrowLeft' && this.keys.includes('ArrowRight'))
                this.facing = 1;
            if (    e.key === 'ArrowDown' || 
                    e.key === 'ArrowUp' ||
                    e.key === 'ArrowLeft' ||
                    e.key === 'ArrowRight'){
                this.keys.splice(this.keys.indexOf(e.key), 1);
            }
            console.log(e.key, this.keys);
        });
        
    }
    update(){
    }
}