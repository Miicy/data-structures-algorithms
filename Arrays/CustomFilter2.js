function customFilter(arr, fn) {
    const filteredArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      const currentValue = arr[i];
      const shouldInclude = fn(currentValue, i);
  
      if (shouldInclude) {
        filteredArr.push(currentValue);
      }
    }
  
    return filteredArr;
  }

// const arr1 = [0, 10, 20, 30];
// const fn1 = function greaterThan10(n) {
//   return n > 10;
// };
// const filteredArr1 = customFilter(arr1, fn1);
// console.log(filteredArr1); 

const arr2 = [1, 2, 3];
const fn2 = function firstIndex(n, i) {
  return i === 0;
};
const filteredArr2 = customFilter(arr2, fn2);
console.log(filteredArr2); // Output: [1]
