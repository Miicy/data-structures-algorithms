const numbers = [99, 56, 21, 3, 66, 44, 98, 42, 25, 33, 2];

function insertionSort(array) {
	const length = array.length;

	// Start from the second element (index 1) since the first element (index 0) is already considered sorted.
	for (let i = 1; i < length; i++) {
		let current = array[i]; // Store the current element to be inserted.
		let j = i - 1;

		// Move elements of the sorted part of the array that are greater than 'current' one position ahead of their current position.
		while (j >= 0 && array[j] > current) {
			array[j + 1] = array[j]; // Shift the element to the right.
			j--;
		}

		// Place 'current' in its correct position within the sorted part of the array.
		array[j + 1] = current;
	}
}

insertionSort(numbers);

console.log(numbers);
