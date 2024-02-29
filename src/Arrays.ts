//# Array in Type script
//->Ways to initialize arrays in Ts

//-1 Using square brackets.
const myArray2: number[] = [1, 2, 2, 35, 5];

//-2 Using Array Constructor.
const myArray3: number[] = new Array(1, 2, 2, 35, 5, 6);

//-3 Using the Array.of() method.
const myArray4: string[] = Array.of("jacva", "c", "JS");

//-->Array Operations
//- Accessing elements using index
console.log(myArray2[0]);
console.log(myArray2.length);

const fruits: string[] = ["Apple", "Orange", "Banana"];
//----------push() ->adds one or more elements on an array and returnsd the new lenegth of the array.
const updatedFruits = fruits.push("grapes");
console.log(updatedFruits);
console.log(fruits); //returns length of updated fruits array.
//-----------pop() ->removes last element of an array and returns that element.
fruits.pop();
console.log(fruits);

//----------shift()  -> removes first element of an array and return that element.
console.log(fruits.shift());

//----------unshift -> adds one or more elements to the beginning of an array and returns the new length of the array.

console.log(fruits.unshift("Cherry"));
console.log(fruits);

//---------forEach(callback()) ->executes a provided function once for each array element.
fruits.forEach((curVal: string) => console.log(curVal));

//---------map() ->iterates over each element in  an array and applies a callback function oto each element, returns a new array with the results of calling the callback on each element.
//----use for transformation array
//*double the each element of the array.
const doubledNumbers: number[] = myArray2.map((curVal: number) => curVal * 2);
console.log(doubledNumbers);
//----------filter() returns a new array with all elements that pass the test implemented by the given callback function.

const evenNumbers: number[] = myArray2.filter((curr: number) => curr % 2 === 0);
console.log(evenNumbers);

const greaterThanThree: number[] = myArray2.filter((curr) => curr > 3);
console.log(greaterThanThree);

//---------reduce() ->used to apply a function against an accumulator and each element in the array  to reduce it to a single value.
const getMaxNum: number = myArray2.reduce(
	(max: number, curr: number): number => {
		if (curr > max) {
			max = curr;
		}
		return max;
	}
);
console.log(`Max number ${getMaxNum}`);
const sum: number = myArray2.reduce((acc, crr): number => {
	acc += crr;
	return acc;
}, 0);
