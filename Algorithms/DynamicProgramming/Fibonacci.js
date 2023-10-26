//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89....

function fibonacci(n) {
	if (n < 2) {
		return n;
	}
	return fibonacci(n - 1) + fibonacci(n - 2);
}

fibonacci(6); //will run a lot of calculations, since it uses recursion

//using memoization

function fibonacciMaster() {
	let cache = {};
	return function fib(n) {
		if (n in cache) {
			return cache[n];
		} else {
			if (n < 2) {
				return n;
			} else {
				cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
				return cache[n];
			}
		}
	};
}

const fasterFib = fibonacciMaster();

fasterFib(50);
