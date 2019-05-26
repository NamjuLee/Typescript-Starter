
console.log('hello world');

// var data = 1 // '1' // false 

let data = 1
console.log(data);

const data2 = true;
console.log(data2)

data = 2;
console.log(data);


let myName: string = 'nj';
myName = 'mj'
// myName = 4;


let myData: number[] = [];
let myData2: Array<number> = [];
myData2.push(100);
console.log(myData2);


let myAny: any = [];
myAny.push('100')
myAny.push(100);
myAny.push({'height': 100})
console.log(myAny);


// Scope!! 
for(let i = 0 ; i < 10; ++i){
    console.log(i);
}
// console.log(i);

let data3 = [1,2,3,4,8,9,10];
data3.forEach((d) =>{
    console.log(d);
} );

// https://bitsofco.de/for-in-vs-for-of/
// https://kongdols-room.tistory.com/30
console.log('--------- loop in');
for(let i in data3){
    console.log(i)
}
console.log('--------- loop of');
for(let i of data3){
    console.log(i)
}
let num = 0;
while(true){
    // do this
    console.log(num)
    if(num++ > 10) {break; }
}


function myAdd1(numA: number, numB: number){
    return numA + numB;
}
const myAdd2 = (numA: number, numB: number) => {
    return numA + numB;
}

(window as any).myAddonWindow = (numA: number, numB: number) => {
    return numA + numB;
}
(document as any).myAddonDoc = (numA: number, numB: number) => {
    return numA + numB;
}
console.log(myAdd1(10, 10))
console.log(myAdd2(10, 10))


let myNum = 110;
if(myNum < 100){
    console.log('condition 1:',  myNum)
} else if(myNum > 100 && myNum < 150){
    console.log('condition 2:',  myNum)
} else{
    console.log('condition 3:',  myNum)
}
