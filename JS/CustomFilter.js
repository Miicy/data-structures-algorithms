// Custom filtering function to filter out even numbers

function customFilter(arr, fn) {
	const filteredArr = [];

    for(let i = 0; i < arr.length; i++){
        const filteredValue = fn(arr[i], i);
        if(filteredValue){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

function isOdd(number) {
    return number % 2 !== 0;
  }

const numbers = [1, 2, 3, 4, 5, 6];
const oddNumbers = customFilter(numbers, isOdd);
console.log(oddNumbers); // Output: [1, 3, 5]
