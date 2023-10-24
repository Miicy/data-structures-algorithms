const numbers = [99, 56, 21, 3, 66, 44, 98, 42, 25, 33, 2];

function mergeSort(array) {
    const length = array.length;

    // Base case: If the array has one or zero elements, it's already sorted.
    if (length <= 1) {
        return array;
    }

    // Find the middle of the array.
    const middle = Math.floor(length / 2);

    // Split the array into two halves.
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    // Recursively sort each half.
    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);

    // Merge the sorted halves back together.
    return merge(leftSorted, rightSorted);
}

// Merge two sorted arrays into a single sorted array.
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements in the left and right arrays and add the smaller element to the result.
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Add any remaining elements from the left and right arrays (if any).
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

const sortedNumbers = mergeSort(numbers);

console.log(sortedNumbers); 