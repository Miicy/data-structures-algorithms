function moveZeroes(nums) {
    let nonZeroIndex = 0;

    // Move all non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i]; // Place non-zero element at the nonZeroIndex
            nonZeroIndex++; // Increment the nonZeroIndex to prepare for the next non-zero element
        }
    }
    
    // Fill the remaining positions with zeros
    while (nonZeroIndex < nums.length) {
        nums[nonZeroIndex] = 0; // Fill the position with zero
        nonZeroIndex++; // Move to the next position
       
    }
    // console.log(nonZeroIndex); 
}

// Test cases
let nums1 = [0, 1, 0, 3, 12, 0, 15, 3];
moveZeroes(nums1);
console.log(nums1);  // Output: [1, 3, 12, 0, 0]


let nums2 = [0, 5, 0, 3];
moveZeroes(nums2);
console.log(nums2);  // Output: [0]