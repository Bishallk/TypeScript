//! Type Aliases
//* It is a way to give a name to a specific type or combination or types.It allows to create a custom name for a type , making it easier to reuse and refer to the same type in different parts of y0our code> Type aliases provide better readbility, Organization and abstraction or complex types

//? We can define type aliases by using type keyword.

type Employee = {
	id: number;
	name: string;
	salary: number;
	address: { city: string; country: string };
};

const emp1: Employee = {
	id: 1,
	name: "bishal",
	salary: 50000,
	address: {
		city: "ktm",
		country: "nepal",
	},
};
const emp2: Employee = {
	id: 2,
	name: "kunwar",
	salary: 50000,
	address: {
		city: "ktm",
		country: "nepal",
	},
};
