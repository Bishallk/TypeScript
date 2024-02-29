//# Objects in Typescript
//* Objects are used to represent data with key-value pairs.
let employee: {
	readonly id: number;
	name: string;
	retire: (date: Date) => void;
} = {
	id: 1,
	name: "bishal",
	retire: (date: Date) => {
		console.log(date);
	},
};

const person: {
	name: string;
	age: number;
	isStudent: boolean;
	address: { city: string; country: string };
} = {
	name: "bishal",
	age: 21,
	isStudent: true,
	address: {
		city: "kathmandu",
		country: "nepal",
	},
};


