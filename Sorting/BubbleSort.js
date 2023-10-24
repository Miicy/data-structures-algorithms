const numbers = [99, 56, 21, 3, 66, 44, 98, 42, 25, 33, 2];

//time complexity - O(n^2)
//space complexity - O(1)
function bubbleSort(array) {
	const lenght = array.length;
	for (let i = 0; i < lenght; i++) {
		for (let j = 0; j < lenght; j++) {
			if (array[j] > array[j + 1]) {
				//swap numbers
				let temporary = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temporary;
			}
		}
	}
}

bubbleSort(numbers);
console.log(numbers);
