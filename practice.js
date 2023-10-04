function PivotPoint(array) {
	let  totalSum = 0;
	let leftSum = 0;
    let pivotIndex = -1;

	array.forEach((element) => {
		totalSum += element;
	});

	array.forEach((element, index) => {
		if (leftSum === totalSum / 2) {
			pivotIndex = index;
		}
		leftSum += element;
	});

	return pivotIndex;
}

const array = [5, 3, 2, 1, 2, 2, 5, 5, 5];
const pivotIndex = PivotPoint(array);
console.log(pivotIndex);
