// setTimeout
function sayHello() {
	console.log("Hello, world!");
}
// Call the sayHello function after a delay of 2000 milliseconds (2 seconds)
setTimeout(sayHello, 2000);

// Example using setInterval
let counter = 1;

function incrementCounter() {
  console.log('Counter:', counter);
  counter++;
}

// Call the incrementCounter function every 1000 milliseconds (1 second)
const intervalId = setInterval(incrementCounter, 1000);

// After 5 seconds, stop the interval
setTimeout(() => {
  clearInterval(intervalId);
  console.log('Interval stopped.');
}, 5000);