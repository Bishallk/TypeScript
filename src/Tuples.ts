//# Tuples in TypeScript
//? Tuples are a type of array that allows you to express an array where the type of a fixed number of elements is known, but need not be the same.

//# make tuple readonly  so that
type Product = readonly [string, string, number, number];
const p1: Product = ["Acer Nitro 5", "laptop", 120000, 5];

const p2: Product = ["Redmi 9 Prime", "mobile", 20000, 10];

const showInfo = (p: Product): string => {
	return `Product name:${p[0]} Type:${p[1]} Price:${p[2]} Quantity:${p[3]}`;
};
console.log(showInfo(p1));
