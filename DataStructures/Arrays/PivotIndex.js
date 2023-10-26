function PivotIndex(array) {
	let totalSum = 0;
	let leftSum = 0;

	// Calculate the total sum of all elements in the array
	for (let i = 0; i < array.length; i++) {
		totalSum += array[i];
	}

	for (let index = 0; index < array.length; index++) {
		// Check if the left sum and right sum are equal
		if (leftSum === totalSum - leftSum - array[index]) {
			return index;
		}

		// Increment the left sum for the next iteration
		leftSum += array[index];
	}

	// If no pivot index is found, return -1
	return -1;
}

function PivotIndex2(array) {
	let totalSum = 0;
	let leftSum = 0;
	let pivotIndex = -1;

	// Calculate the total sum of all elements in the array
	array.forEach((element) => {
		totalSum += element;
	});

	array.forEach((element, index) => {
		// Check if the left sum and right sum are equal
		if (leftSum === totalSum / 2) {
			pivotIndex = index;
		}

		// Increment the left sum for the next iteration
		leftSum += element;
	});

	return pivotIndex;
}

const array = [5, 3, 2, 1, 2, 2, 5, 5, 5];
const pivotIndex = PivotIndex2(array);
console.log("Pivot Index:", pivotIndex);
