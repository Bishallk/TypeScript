//# Union In Typescript
//? Union types are used when we want to work with multiple types of values. We can define a union type using the | operator.
//? A union type is a type formed from two or more other types, representing values that may be any one of those types.

//-Solve this
//* create a function that can accept different types of arguments and perform different actions based on the type of the input.Suppose we want to create a function that doubles the value if the input is a number, or converts the input to uppercase if it 's a string. To achieve this,we can use a union type to allow the function to accept both numbers and strings.

const userInput = (value: string | number): string | number => {
	if (typeof value === "string") {
		return value.toUpperCase();
	} else if (typeof value === "number") {
		return value * 2;
	} else {
		throw new Error("Invalid Input");
	}
};

console.log(userInput("bishal"));
console.log(userInput(1));
