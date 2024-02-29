//# Call Signature
//* The function call signature refers to the declaration or definition of a function, which includes the function's name, parameters, and return type.
//* It defines the strtucture and type information of a funciton without including the function's inplementaion or body.

//? call signatures are typically used inside object type notaions to descript the shape of functions within object types.

type Student = {
	name: string;
	age: number;
	gender?: string;
	greet: () => string; //call signature
};
const student1: Student = {
	name: "bishal",
	age: 22,
	gender: "male",
	greet: () =>
		`Namaste, I am ${student1.name}. I am ${student1.age} years old.`,
};
