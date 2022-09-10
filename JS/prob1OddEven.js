// Showing without using return

function oddEven(number) {
    if (number % 2 == 0) {
        //console.log('Even');
    }
    else {
        //console.log('Odd');
    }
}

oddEven(57);
oddEven(80);

// Showing with using return

function oddEven(number) {
    if (number % 2 == 0) {
        return 'Even';
    }
    else {
        return 'odd';
    }
}

let result1 = oddEven(57);
let result2 = oddEven(80);

console.log(result1);
console.log(result2);