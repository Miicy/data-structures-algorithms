function twoSum(nums, target) {
    const numIndex = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numIndex.has(complement)) {
            return [numIndex.get(complement), i];      //complement - adds up
        }

        numIndex.set(nums[i], i);
    }

    // If no solution is found
    return [];
}

// Example usage
const nums1 = [2, 7, 11, 88];
const target1 = 9;
console.log(twoSum(nums1, target1)); // Output: [0, 1]

const nums2 = [3, 2, 4];
const target2 = 6;
console.log(twoSum(nums2, target2)); // Output: [1, 2]

const nums3 = [3, 3];
const target3 = 6;
console.log(twoSum(nums3, target3)); // Output: [0, 1]