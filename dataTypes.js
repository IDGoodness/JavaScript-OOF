// String 
let name = 'John Doe';

// Number
let age = 30;

// Boolean
let isRaining = true;

// Undefined --- Unassigned variable
let address;
console.log(address);

// Null
let car = null;
console.log(car)

// Object
let color = {
    white: "#fff",
    black: "#000"
}

console.log(color);

// Array
let colors = ['red', 'green', 'blue'];
let cars = ['BMW', 'Toyota', 'Honda', 'Benz', 'Ford'];
console.log(cars);

// Objects can contain other datatypes, like arrays, string, numbers etc.

let basket = {
    cars : ['BMW', 'Toyota', 'Honda', 'Benz', 'Ford'],
    colors : ['red', 'green', 'blue']
}


// Symbol
let sym = Symbol('foo');
console.log(sym)

// BigInt
x = BigInt(27652543245)
y = BigInt(44565767654324565)

console.log(x * y);