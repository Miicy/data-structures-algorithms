const numbers = [99, 56, 21, 3, 66, 44, 98, 42, 25, 33, 2];

function quickSort(array) {
    // Base case: If the array has one or zero elements, it's already sorted.
    if (array.length <= 1) {
        return array;
    }

    // Choose a pivot element (usually the last element in the array).
    const pivot = array[array.length - 1];
    const left = [];
    const right = [];

    // Partition the array into two sub-arrays based on the pivot.
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    // Recursively sort the left and right sub-arrays.
    const sortedLeft = quickSort(left);
    const sortedRight = quickSort(right);

    // Combine the sorted sub-arrays and the pivot to get the final sorted array.
    return [...sortedLeft, pivot, ...sortedRight];
}

const sortedNumbers = quickSort(numbers);

console.log(sortedNumbers); 