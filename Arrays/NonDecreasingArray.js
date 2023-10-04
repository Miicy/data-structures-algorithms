function NonDecreasingArray(nums) {
    let violationCount = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            violationCount++;
            if (violationCount > 1) {
                return false; // More than one violation, impossible to fix
            }

            // Try to fix the violation by modifying either nums[i] or nums[i + 1]
            if (i > 0 && nums[i - 1] > nums[i + 1]) {
                nums[i + 1] = nums[i]; // Modify nums[i + 1]
            } else {
                nums[i] = nums[i + 1]; // Modify nums[i]
            }
        }
    }

    return true;
}

// Example usage:
console.log(NonDecreasingArray([4, 2, 3])); // Output: true
console.log(NonDecreasingArray([4, 2, 1])); // Output: false