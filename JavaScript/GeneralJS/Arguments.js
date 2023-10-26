function exampleFunction() {
	console.log(arguments[0]); // Access the first argument
	console.log(arguments.length); // Access the number of arguments
}
exampleFunction(1, 2, 3); // Call the function with arguments


function exampleFunction2(a, b) {
	return a + b;
}

const result = add(2, 3); // Here, 2 and 3 are the arguments passed to the "add" function.
