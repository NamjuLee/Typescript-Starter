

class App {
    ctx: CanvasRenderingContext2D;
    r: number = 1.0;
    constructor(id: string) {
        this.Init(id)
    }
    Init(id: string) {
        const div = document.getElementById(id);

        const canvas = document.createElement('canvas');
        this.ctx = canvas.getContext('2d');

        div.appendChild(canvas);
        this.loop();

    }
    loop(){
        requestAnimationFrame(() => { this.loop(); });
        this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.Render(this.ctx);
    }
    Render(ctx: CanvasRenderingContext2D){
        const r = Math.sin(this.r);
        ctx.beginPath();
        ctx.arc(100 + this.r, 100, 5 + r, 0, 3.14 *2 );
        ctx.closePath();
        ctx.fill();
        console.log('isLoop');
        this.r += 0.1;
    }
}

const app = new App('main');
console.log('eee!!');
