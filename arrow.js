// function doubleIt(num){
//     return num * 2
// }


// const doubleIt = function(num){
//     return num*2
// }

const doubleIt = num => num*2;
console.log(doubleIt(25));

// const add = (x,y=20) => x+y;
const add = (x,y) => x+y
console.log(add(10,15));

const return15 = () => 15;
console.log(return15());

const doMath = (x,y) => {
    const sum = x+y;
    const difference = x-y;
    return sum * difference;
}
console.log(doMath(12,2));