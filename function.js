// Basic Math Operations add, mul, sub, div, mul
// Assignment --- mod(remainder) and power(exponent) operation, concantenate strings, logarithm operation, circumference operation, palindrome




// Addition

function add (x, y) {
    let sum = x + y
    return sum
}

let result = add(5, 8);

console.log("Add: " + result);



// Subtraction

function sub(i, j) {
    let subtract = i -j
    return subtract
}

let result2 = sub(50, 23);
console.log("Subtract: " + result2)



// Divsion

function div(i, j) {
    let divide = i -j
    return divide;
}

let result3 = sub(100, 2);
console.log("Divide: " + result3)



// Multiplication

function mul(i, j) {
    let multiply = i * j
    return multiply;
}

let result4 = sub(100, 2);
console.log("Multiply: " + result4)



// Odd or Even Function

function odd(number) {
    if (number % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(odd(4))