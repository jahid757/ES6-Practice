function number(num1,num2){

    return num1 + num2;
}

const total = number(15,17);

console.log('Number 1 = ',total);

function number2(num1,num2){
    if(num2 == undefined){
        num2 = 0;
    }
    return num1 + num2;
}

console.log('Number 2 = ',number2(10))

function number3(num1,num2){
    num2 = num2 || 0;
    return num1+num2;
}
console.log("Number 3 = ",number2(12));

function number4(num1,num2=0){
    return num1 + num2;
}
console.log('Number 4 = ',number4(17));