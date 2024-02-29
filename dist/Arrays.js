"use strict";
const myArray2 = [1, 2, 2, 35, 5];
const myArray3 = new Array(1, 2, 2, 35, 5, 6);
const myArray4 = Array.of("jacva", "c", "JS");
console.log(myArray2[0]);
console.log(myArray2.length);
const fruits = ["Apple", "Orange", "Banana"];
const updatedFruits = fruits.push("grapes");
console.log(updatedFruits);
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(fruits.shift());
console.log(fruits.unshift("Cherry"));
console.log(fruits);
fruits.forEach((curVal) => console.log(curVal));
const doubledNumbers = myArray2.map((curVal) => curVal * 2);
console.log(doubledNumbers);
const evenNumbers = myArray2.filter((curr) => curr % 2 === 0);
console.log(evenNumbers);
const greaterThanThree = myArray2.filter((curr) => curr > 3);
console.log(greaterThanThree);
const getMaxNum = myArray2.reduce((max, curr) => {
    if (curr > max) {
        max = curr;
    }
    return max;
});
console.log(`Max number ${getMaxNum}`);
const sum = myArray2.reduce((acc, crr) => {
    acc += crr;
    return acc;
}, 0);
