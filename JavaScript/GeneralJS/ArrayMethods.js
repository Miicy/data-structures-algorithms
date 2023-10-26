// forEach
const colors = ['red', 'blue', 'green'];
colors.forEach((color) => {
  console.log(color);
});

// map
const numbers = [1, 2, 3];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

// filter
const ages = [25, 18, 32, 40, 15, 27];
const adults = ages.filter((age) => age >= 18);
console.log(adults);

// find
const students = [
  { name: 'Alice', id: 101 },
  { name: 'Bob', id: 102 },
  { name: 'Charlie', id: 103 },
];
const bob = students.find((student) => student.name === 'Bob');
console.log(bob);

// reduce
/*The reduce method in JavaScript is different from some and every because it's used for accumulating values rather than testing conditions. 
Reduce is used to iterate over an array, apply a given function to each element, and accumulate the results into a single value. */ 
const numbersToSum = [1, 2, 3, 4, 5];
const sum = numbersToSum.reduce((total, number) => total + number, 0);
console.log(sum);

// some
/*The some method is used to determine if at least one element in an array satisfies a given condition. 
It returns true if at least one element meets the condition; otherwise, it returns false. 
If any element passes the condition, some stops iterating and returns true.*/

const hasNegative = [1, 2, -3, 4, 5];
const anyNegative = hasNegative.some((number) => number < 0);
console.log(anyNegative);

// every
/*The every method is used to check if all elements in an array satisfy a given condition.
 It returns true if all elements meet the condition; otherwise, it returns false. 
 If any element fails to meet the condition, every stops iterating and returns false.*/

const allPositive = [1, 2, 3, 4, 5];
const areAllPositive = allPositive.every((number) => number > 0);
console.log(areAllPositive);