function searchRotatedArray(array, target) {
        let left = 0;
        let right = array.length - 1;
    
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
    
            if (array[mid] === target) {
                return mid; // Found the target
            }
    
            // Check which half of the array is sorted
            if (array[left] <= array[mid]) {
                // Left half is sorted
                if (array[left] <= target && target < array[mid]) {
                    // Target is in the left half
                    right = mid - 1;
                } else {
                    // Target is in the right half
                    left = mid + 1;
                }
            } else {
                // Right half is sorted
                if (array[mid] < target && target <= array[right]) {
                    // Target is in the right half
                    left = mid + 1;
                } else {
                    // Target is in the left half
                    right = mid - 1;
                }
            }
        }
    
        return -1; // Target not found
    }
    

const array = [4, 5, 6, 7, 0, 1, 2];
const target = 0;
const search = SearchRotatedArray(array, target);
//Output: 4
