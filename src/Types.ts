//# Type annotation
//> type annotation helps to check type of variable
//> can insert annotation after : (colon) for eg let var n:number=1;

//# Data Types or Type annotations

//? -----number--------------------------------------
//* stores integer values For Eg 1, 3.14, -5
let num: number = 5;
num = 3.14;
num = -8;
console.log(num);
console.log((Number as any).MAX_SAFE_INTEGER);

//? -----string----------------------------------------
//* stores strings. For Eg. "bishal", 'kunwar'
let myName: string = "bishal kunwar";

//? -----boolean----------------------------------------
//* stores boolean values Eg. true or false
let bool: boolean = true;
bool = false;

//? -----bigInt------------------------------------------
//* stores a numeric value which can't be sotred by number data type
//* we need to add n to the prefix of the number which is type of bigint.
//let bint = 99999999999999999999n;
// let num3 = 99999999999999;
//# Numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers.
//? -------any-------------------------------------------
//* it is a flexible type it can store any types of value
//* It's often used when migrating existing JavaScript code to TypeScript.
//* or, when working with values of unknown types, such as when interfacing with dynamic APIs.

let anytype: any = "bishal";
anytype = 3;
anytype = true;
anytype.abc(); // Allowed, even though 'abc' might not exist.

if (typeof anytype === "number") {
	console.log("number");
} else {
	console.log(typeof anytype);
}

//? ------unknown-----------------------------------------
//* The unknown type is safer than any because TypeScript requires you to narrow down or assert the type of an unknown value before performing operations on it.

//* we must perfom a type check or assertion  before performing any operation
//* it is used in generics

let utype: unknown = "bishal";
utype = 12;
utype = false;

// utype + 5; //! this is invalid

if (typeof utype === "number") {
	//* we can perfrom operation by checking type
	utype + 5;
}

//! Type Inference
//# TS's compiler is smart enough to infer type in many cases so always we don't have to explicitly annotate types.
let n5 = 4;
//* n5="bishal" // when we try to assign string to n5 it gives error -->
//!Type 'string' is not assignable to type 'number'.ts(2322)
