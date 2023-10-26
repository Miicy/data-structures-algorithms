// Arrow function
const arrowFunc = (param) => {};

// Traditional function
function traditionalFunc(param) {}

//1.This binding

const obj = {
	name: "John",
	sayHello: () => {
		console.log(`Hello, ${this.name}`);
	},
};

obj.sayHello(); // Outputs: "Hello, undefined" because the arrow function captures the global `this`.

const obj1 = {
	name: "John",
	sayHello: function () {
		console.log(`Hello, ${this.name}`);
	},
};

obj.sayHello(); // Outputs: "Hello, John" because `this` is bound to `obj`.

// 2.No Arguments Object

function test() {
	const printArguments = () => {
		console.log(arguments); // This line causes a ReferenceError
	};
	printArguments(1, 2, 3);
}

test();

/* Outputs the arguments passed to the `test` function.
   Arrow functions do not have their own arguments object. They inherit the arguments object from their containing function.
   Traditional functions have their own arguments object, which is an array-like object containing the arguments passed to the function.*/

// 3.Not Suitable for Constructors

// Arrow functions cannot be used as constructors to create instances of objects. They lack the internal constructor mechanism and prototype chain necessary for this purpose.
// Traditional functions can be used as constructors to create instances of objects using the new keyword.

function MyConstructor() {
	this.value = 42;
}
const instance = new MyConstructor();
console.log(instance.value); // Outputs: 42

// 4.Super Binding:

/*Arrow Function:
Arrow functions do not have their own super binding. They inherit the super value from their containing function or context.

Traditional Function:
Traditional functions can have their own super binding in the context of classes and can be used to access methods in the superclass. 
This is typically used within class methods when extending classes in object-oriented programming.*/
