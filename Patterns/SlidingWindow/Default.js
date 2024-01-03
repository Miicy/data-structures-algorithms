/*
https://www.youtube.com/watch?v=SwsuK-rynVo&list=PLB7ZlVMcmjIDUDmOnoIRATIblml0hBt57&index=2&ab_channel=MiketheCoder

  Calculate something among all the contiguous subarrays(small array which is a part of a big array) or sublists of a given size. 

  Example: Given an array, find the average of all contiguous(susedni) subarrays of size K in it. 

           Array: [1, 3, 2, 6, -1, 4, 1, 8, 2] K= 5

           Here we are asked to find an average of all contiguous(susedni) subarrays of size "5"

           Meaning that first 5 numbers (index 0-4), the average is (1, 3, 2, 6, -1,)/5 = 2.2 
        
           the average of next 5 numbers (index 1-4), the average is (3, 2, 6, -1,,4)/5 = 2.8

           ...
 
           Final result is [2.2, 2.8, 2.4, 3.6, 2.8]*/

// Not so efficient solution because it takes same numbers and calculates them all over again all the time, just changing one at beggining and end - O(n*size)

function AverageOfSubarrays(array, size) {
	result = [];

	for (let i = 0; i <= array.length - size; i++) {
		sum = 0;
		for (let j = i; j < i + size; j++) {
			sum += array[j];
		}

		result.push(sum / size);
	}

	return result;
}

const array1 = [1, 3, 2, 6, -1, 4, 1, 8, 2];
const size = 5;

console.log(AverageOfSubarrays(array1, size));

//Sliding Window solution O(n)

function AverageOfSubarraysSlidingWindow(array, size) {
	const result = [];
	let sum = 0;
	let windowStart = 0;

	for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
		sum += array[windowEnd]; // Expand the sliding window

		if (windowEnd >= size - 1) {
			result.push(sum / size); // Calculate average and push to result array
			sum -= array[windowStart]; // Shrink the sliding window
			windowStart++;
		}
	}

	return result;
}

const array2 = [1, 3, 2, 6, -1, 4, 1, 8, 2];
const size2 = 5;

console.log(AverageOfSubarraysSlidingWindow(array2, size2));
