//? TYPESCRIPT [TS]

//-> Typescript is opensource object oriented programming language maintained by microsoft.

//-> Typescript is a super set of Javascript which means all JS code is valid in TS Code

//! Features of Typescript

//* Static Typing : TS allows to specify types of variables, functions parameters and return values.

//* Type Inference : TS's compiler is smart enough to infer type in many cases so always we don't have to explicitly annotate types.

//* ECMAScript Features : TS supports modern JS features as defined  in the ECMAScript standard.

//* Classes & Interfaces : TS supports OOP concepts like classes, interfaces, inheritence and  	access modifiers.

//* Generics : TS supports generics, which allows to write resuable codes that can work with different datat types.

//* Compile Time Checks : TS is transpiled into JS. During this process TS compiler checks for the errors and issues warnings.

//--------------------- Examples----------------------------------

let n1: number = 5; // we can annotate the type of variable.
let s1: string = "bishal"; // we can't assign different type of value other than string.

//* we can annotate type of arguments and return type of a function.

function hi(yourname: string): string {
	return "Hi " + yourname;
}

let n2 = 5;
//n2="bishal"; //* it gives error n2 is assigned with number first we can't assign it with another data type.

//! To create a ts config file
//->cmd: tsc --init

//! Some setting in config file before start
//# "target": "ES2022" -->To Set the JavaScript language version for emitted JavaScript
//# "rootDir": "./foldername" --> Specify the root folder within your source files.[TS files]
//# "outDir": "./foldername" --> Specify an output folder for all emitted files.[JS files]
//# "removeComments": true --> Disable comments in transpiled js files.
//# "noEmitOnError": true  --> Disable emitting files if any type checking errors are reported.
