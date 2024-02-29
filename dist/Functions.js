"use strict";
function sayHello(name) {
    return `Hello, ${name}`;
}
console.log(sayHello("Bishal"));
let greet = (name) => `Hello, ${name}`;
console.log(greet("typescript"));
const isPalindrome = (text) => {
    let palin = text.split("").reverse().join("");
    return palin === text;
};
console.log(isPalindrome("12321"));
const calcAverage = (myArray) => {
    if (myArray.length === 0) {
        return 0;
    }
    const sum = myArray.reduce((acc, curr) => acc + curr);
    const avg = sum / myArray.length;
    return avg;
};
const findMax = (myArray) => {
    return Math.max(...myArray);
};
const numbers = [1, 2, 3];
console.log(`Average: ${calcAverage(numbers)}`);
console.log(`Max: ${findMax(numbers)}`);
const greet2 = (name, id) => {
    if (id) {
        return `Hello ${name} your id is ${id}`;
    }
    else {
        return `Hello ${name}`;
    }
};
const greet3 = (id = 1) => {
    return id;
};
