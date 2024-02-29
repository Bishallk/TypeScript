//# Intersection in typescript
//? Intersection types are used to combine multiple types into a single type.
//? Use the & (ampersand) operator to create an intersection type.
type Person = {
	name: string;
	age: number;
};
type Emp = {
	id: number;
	department: string;
};
type EmployeeDetails = Person & Emp;
const empl1: EmployeeDetails = {
	name: "bishal",
	age: 22,
	id: 1,
	department: "IT",
	// we must include all the properties of both types
};

//* Practice: Create User Profile You are given two TypeScript types: User and MyLocation. The User type represents basic user information, while the MyLocation type contains details about the user's location. create a function called createUserProfie that takes a User object and a MyLocation object as arguments and prints the user's name and the city they are from.

type User = {
	name: string;
	age: number;
};
type MyLocation = {
	city: string;
	country: string;
};
const createUserProfile = (user: User & MyLocation) => {
	console.log(`User Name: ${user.name}, City: ${user.city}`);
};
type userDetail = User & MyLocation;
const user11: userDetail = {
	name: "bishal Kunwar",
	age: 22,
	city: "Kathmandu",
	country: "Nepal",
};
createUserProfile(user11);
