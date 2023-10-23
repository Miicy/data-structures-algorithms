//Given number N return the index value of the Fibonacci sequence, where sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
//the pattern of the seqence is that each value is the sum of 2 previous values, that means that for n= 5 => 2+3

function fibonacciRecursion(n) {    //O(2^n) - pretty bad for time complexity
	if (n < 2) {
		return n;
	}
	return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}

fibonacciRecursion(3);

function fibonacciIterative(n) {    //O(n)
	let arr = [0, 1];
	for (let i = 2; i < n + 1; i++) {
		arr.push(arr[i - 2] + arr[i - 1]);
	}
	return arr[n];
}

fibonacciIterative(3);
