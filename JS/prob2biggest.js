// Using without return

function biggestNumber(number1, number2, number3) {
    if (number1 > number2 && number1 > number3) {
        //console.log(number1);
    }
    else if (number2 > number1 && number2 > number3) {
        //console.log(number2);
    }
    else {
        //console.log(number3);
    }
}
biggestNumber(1, 2, 3);
biggestNumber(5, 7, 3);
biggestNumber(10, 7, 3);


// Using without return

function biggestNumber(number1, number2, number3) {
    if (number1 > number2 && number1 > number3) {
        return (number1);
    }
    else if (number2 > number1 && number2 > number3) {
        return (number2);
    }
    else {
        return (number3);
    }
}
let result1 = biggestNumber(1, 2, 3);
let result2 = biggestNumber(5, 7, 3);
let result3 = biggestNumber(10, 7, 3);

console.log(result1);
console.log(result2);
console.log(result3);