/*Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.*/

function transformElements(arr, fn) {
    
    const mappedArr = [];

    for (let i = 0; i < arr.length; i++) {
        const transformedValue = fn(arr[i], i);
        mappedArr.push(transformedValue);
    }
    return mappedArr;
}


const array = [1, 2, 3];
const plusone = function (n) { return n + 1; }
const newArray = transformElements(array, plusone);
console.log(newArray);