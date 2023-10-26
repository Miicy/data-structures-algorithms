function doublePairs(array) {
	const result = [];

	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			console.log(array[i], array[j]);
			// result.push(array[i], array[j]);
		}
	}

	return result;
}

//for each doesnt work with ES4 (ECMAScript 4)

function doublePairs(array) {
	const result = [];

	array.forEach((element1) => {
		array.forEach((element2) => {
      result.push([element1, element2]);
		});
	});

	return result;
}

const inputArray = [1, 2, 3, 4];
const doubledPairs = doublePairs(inputArray);

console.log(doubledPairs);

// Output:
// (1, 1)
// (1, 2)
// (1, 3)
// (1, 4)
// (2, 1)
// (2, 2)
// (2, 3)
// (2, 4)
// (3, 1)
// (3, 2)
// (3, 3)
// (3, 4)
// (4, 1)
// (4, 2)
// (4, 3)
// (4, 4)
