//# Functions in TypeScript

//* Function can be decleared using 'function' keyword, followed by the function name, a list of parameters enclosed in parentheses and a return type.
function sayHello(name: string): string {
	return `Hello, ${name}`;
}
//* To call the function simply call by using name followed by parentheses and provide required arguments if (any).
console.log(sayHello("Bishal"));

//!Fat arrow function
let greet = (name: string): string => `Hello, ${name}`;
console.log(greet("typescript"));

//? Write a function which check if string is palindrome or not.

const isPalindrome = (text: string): boolean => {
	let palin = text.split("").reverse().join("");
	return palin === text;
};
console.log(isPalindrome("12321"));

//? write a function called calcAverage that takes an array of numbers as a parameter and returns the avg of those numbers.

const calcAverage = (myArray: number[]): number => {
	if (myArray.length === 0) {
		return 0;
	}

	const sum: number = myArray.reduce((acc, curr) => acc + curr);
	const avg: number = sum / myArray.length;
	return avg;
};

//? function to find a max no in array
const findMax = (myArray: number[]): number => {
	return Math.max(...myArray);
};

const numbers: number[] = [1, 2, 3];
console.log(`Average: ${calcAverage(numbers)}`);
console.log(`Max: ${findMax(numbers)}`);

//! Optional and Default parameter
//*Here  id is optional
const greet2 = (name: string, id?: number): string => {
	if (id) {
		return `Hello ${name} your id is ${id}`;
	} else {
		return `Hello ${name}`;
	}
};
// here id is default 1 is a default value for id
const greet3 = (id: number = 1): number => {
	return id;
};
