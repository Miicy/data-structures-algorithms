function BinarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (array[mid] === target) {
            return mid; // Element found, return its index
        } else if (array[mid] > target) {
            right = mid - 1; // Adjust the search interval to the left half
        } else {
            left = mid + 1; // Adjust the search interval to the right half
        }
    }

    return -1; // Element not found
}


const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetElement = 3;
const result = BinarySearch(sortedArray, targetElement);

if (result !== -1) {
    console.log(`Element ${targetElement} found at index ${result}`);
} else {
    console.log(`Element ${targetElement} not found in the array`);
}