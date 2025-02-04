//String - Represents text.
let string = "Hello";

//Number - Represents numeric values (both integers and floating-point numbers).
let number = 123;

//Null - Represents an explicitly empty or unknown value.
let pass = null;

//Undefined - A variable that has been declared but not assigned a value.
let undefines; // Correct way to define an undefined variable

//Symbol - A unique and immutable value.
let symbol = Symbol("unique");

//Object - A collection of key-value pairs.
let object = { name: "John", age: 30 };

//Boolean - Represents true or false values.
let boolean = true; // or false

//there is function type of
//when wants to type null dataypes in output is object Why->let value->This is actually a historical bug in JavaScript that was never fixed for backward compatibility. 
let value = null;
console.log(typeof value); // "object" (due to historical bug)
console.log(value === null); // true (correct way to check for null)

// console.log(typeof  datatpes);
