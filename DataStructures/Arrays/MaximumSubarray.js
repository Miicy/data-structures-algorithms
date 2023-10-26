//0(n) solution

function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];

    nums.slice(1).forEach((num) => {
        currentSum = Math.max(num, currentSum + num);
        maxSum = Math.max(maxSum, currentSum);
    });

    return maxSum;
}
// We use slice 1 that will make a new array that starts at second element, similar what happens up in (let i = 1)

//0(1)
function maxSubArray(nums) {
    if (nums.length === 1) {
        return nums[0];
    }

    const middle = Math.floor(nums.length / 2);
    const leftMax = maxSubArray(nums.slice(0, middle));
    const rightMax = maxSubArray(nums.slice(middle));
    const crossMax = maxCrossingSum(nums, middle);

    return Math.max(leftMax, rightMax, crossMax);
}

function maxCrossingSum(nums, middle) {
    let leftSum = Number.NEGATIVE_INFINITY;
    let sum = 0;

    for (let i = middle; i >= 0; i--) {
        sum += nums[i];
        leftSum = Math.max(leftSum, sum);
    }

    let rightSum = Number.NEGATIVE_INFINITY;
    sum = 0;

    for (let i = middle + 1; i < nums.length; i++) {
        sum += nums[i];
        rightSum = Math.max(rightSum, sum);
    }

    return leftSum + rightSum;
}

//Looking for 2 adjected elements with biggest sum value

const nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums1)); // Output: 6

const nums2 = [1];
console.log(maxSubArray(nums2)); // Output: 1

const nums3 = [5, 4, -1, 7, 8];
console.log(maxSubArray(nums3)); // Output: 23