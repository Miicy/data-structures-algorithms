function firstMissingPositive(nums) {
    const n = nums.length;

    // Step 1: Move all positive integers to their correct positions
    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[nums[i] - 1]) {
            // Swap nums[i] and nums[nums[i] - 1]
            [nums[i], nums[nums[i] - 1]] = [nums[nums[i] - 1], nums[i]];
        }
    }

    // Step 2: Find the first missing positive integer
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    // If all positive integers from 1 to n are present, return n + 1
    return n + 1;
}

// Test cases
const nums1 = [ 1,  2, 0];
console.log(firstMissingPositive(nums1)); // Output: 3

const nums2 = [3, 4, -1, 1];
console.log(firstMissingPositive(nums2)); // Output: 2

const nums3 = [7, 8, 9, 11, 12];
console.log(firstMissingPositive(nums3)); // Output: 1
