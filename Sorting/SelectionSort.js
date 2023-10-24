const numbers = [99, 56, 21, 3, 66, 44, 98, 42, 25, 33, 2];

function selectionSort(array) {
    const length = array.length;

    for (let i = 0; i < length - 1; i++) {
        // Find the index of the minimum element in the unsorted part of the array
        let min = i;
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }

        // Swap the found minimum element with the first element of the unsorted part
        if (min !== i) {
            const temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    return array;
}

selectionSort(numbers);

console.log(numbers);
