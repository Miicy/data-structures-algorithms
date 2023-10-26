//without cache:
function addTo80(n) {
	return n + 80; //if theoreticallythis takes very long time, we can improve that by caching
}

addTo80(5);

//cache example:

function memoizeAddTo80() {
	let cache = {
		//5: 85 - this fucntion will add it to cache, and next time will pull the value from here, wont calculate it again
	};
	return function (n) {//this is called closure to not reset cache every time function is ran
		if (n in cache) { //a way to check if something exists in object in JS

			return cache[n]; //return cached value
		} else {
			cache[n] = n + 80; //if n is for example 5, we store it in cache for that case
			return cache[n];
		}
	};
}

const memoized = memoizeAddTo80();

memoized(5);
memoized(6);