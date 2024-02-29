"use strict";
const userInput = (value) => {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value * 2;
    }
    else {
        throw new Error("Invalid Input");
    }
};
console.log(userInput("bishal"));
console.log(userInput(1));
