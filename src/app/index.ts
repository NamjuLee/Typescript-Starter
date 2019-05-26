
class MyNode{
    public idNumber: number;
    connections: MyNode[];
    constructor( idNumber: number){
        this.idNumber = idNumber
        this.connections = []
    }
     addNode(n0){
        this.connections.push(n0);
        n0.connections.push(this);
     }
    toJson(){
        let outDict = {}
        outDict['id'] = this.idNumber;
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
    constructor(num: number){
        this.nodes = [];
        for (let i = 0; i < num; ++i){
            let n: MyNode = new MyNode(i)
            this.nodes.push(n)
        }
    }
    getRandomIndex(){
       return Math.floor(Math.random() * this.nodes.length);
    }
    initCon(num){
        for (let i = 0; i< num; ++i){
            let index0 = this.getRandomIndex();
            let index1 = this.getRandomIndex();
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

let g = new Graph(100);
g.initCon(100);
console.log(g.toJson());