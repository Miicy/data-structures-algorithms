/*

Question: Given an array of positive numbers amd a positive K, find a maxiumum sum of any contiguous subarray of size K.

Example: Input: [2,1,5,1,3,2] K=3
         Output: 9
         Exmplanation: Subarray with max sum is [5,1,3]

*/

function MaximumSubarrayOfSize(array, size) {
	let maxSum = 0;
	let sum = 0;
	let windowStart = 0;

	for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
		sum += array[windowEnd];
		if (windowEnd >= size - 1) {
			maxSum = Math.max(maxSum, sum);
			sum -= array[windowStart];
			windowStart++;
		}
	}
	return maxSum;
}

const array = [2, 1, 5, 1, 3, 2];
const size = 3;
console.log(MaximumSubarrayOfSize(array, size));
