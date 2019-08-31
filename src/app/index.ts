import {Ex} from './ex/ex';

class MyNode{
    public idNumber: number;
    connections: MyNode[];
    x: number = 0;
    y: number = 0;
    constructor( idNumber: number, x: number, y: number){
        this.idNumber = idNumber
        this.connections = []
        this.x = x;
        this.y = y;
        let ex = new Ex();
    }
     addNode(n0){
        this.connections.push(n0);
        n0.connections.push(this);
     }
    toJson(){
        let outDict = {}
        outDict['id'] = this.idNumber;
        
        outDict['x'] = this.x;
        outDict['y'] = this.y;
        
        outDict['connectivity'] = [];
        for(let i = 0; i < this.connections.length; ++i){
            outDict['connectivity'].push(this.connections[i].idNumber)
        }

        return outDict
    }
    print(){
        console.log("id: ", this.idNumber, ', numOfCon:', this.connections.length );
    }
}

// import random as rnd

class Graph{
    nodes: MyNode[] = [];
    constructor(num: number, width: number, height: number){
        this.nodes = [];
        for (let i = 0; i < num; ++i){
            let n: MyNode = new MyNode(i,this.getRandomIndex(width), this.getRandomIndex(height) )
            this.nodes.push(n)
        }
    }
    getRandomIndex(max: number){
       return Math.floor(Math.random() * max);
    }
    initCon(num){
        for (let i = 0; i< num; ++i){
            let index0 = this.getRandomIndex(this.nodes.length);
            let index1 = this.getRandomIndex(this.nodes.length);
            if (index0 !== index1){
                this.nodes[index0].addNode(this.nodes[index1])
                 console.log(index0, index1 )
            }
        }
    }
    toJson(){
        let outList = []
        for (let i = 0; i< this.nodes.length; ++i){
            outList.push(this.nodes[i].toJson())
        }
        return outList;
    }
}



const div = document.getElementById('main');
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
div.appendChild(canvas);

let g = new Graph(100, ctx.canvas.width-1, ctx.canvas.height-1);
g.initCon(100);
let dataVis = g.toJson()
console.log(dataVis);


dataVis.forEach( (d) => {
 
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 0, 0, 0.4)'
    for(let i = 0; i < d.connectivity.length; ++i){
        ctx.moveTo(d.x , d.y);
        let other = dataVis[d.connectivity[i]];
        ctx.lineTo(other.x, other.y);
    }
    ctx.closePath(); 
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(d.x , d.y, d.connectivity.length + 1 , 0, 3.14 *2 );
    ctx.closePath();    
    ctx.fill();
})

console.log('done for rendering');

    