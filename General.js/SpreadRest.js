//Rest Parameter

/*In summary, the rest parameter is primarily used to collect function arguments into an array.*/

function sum(...numbers) {
    if (numbers.length === 0) {
      return 0; // Return 0 if no arguments are provided
    }
  
    return numbers.reduce((total, number) => total + number, 0);
  }
  
  console.log(sum());             // Output: 0 (no arguments)
  console.log(sum(1, 2));         // Output: 3 (1 + 2)
  console.log(sum(1, 2, 3, 4));    // Output: 10 (1 + 2 + 3 + 4)
  console.log(sum(10, 20, 30));   // Output: 60 (10 + 20 + 30)


//Spread Operator

/*While the spread operator is used for spreading elements from one iterable into another iterable, such as arrays, function arguments, or object properties. */

//combining arrays

const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5, 6];

//function calls: It can be used to pass elements of an array as individual function arguments.

const numbers1 = [1, 2, 3];
const sum = add(...numbers1); 

//In object literals: It can be used to copy properties from one object to another..

const person = { name: "Alice", age: 30 };
const copiedPerson = { ...person };