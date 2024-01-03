function containsDuplicate(nums) {
	// Create a Set to store unique values
	const seen = new Set();

   
	for (const num of nums) {
		// If the Set already contains the current number, it's a duplicate
		if (seen.has(num)) {
        //here we use has method that is just for sets, while includes is for arrays, and contains is for arrays and sets
			return true; // Found a duplicate
		}
		// Otherwise, add it to the Set. .add method for sets/ .delete method for sets
		seen.add(num);
	}

	return false; // No duplicates found
}

// Test cases
console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true


// Set: A Set in JavaScript is an object, but it's a specialized object designed to store a collection of unique values. 
//      It can only contain unique elements, which means that it automatically removes duplicates. 
//      In other words, if you try to add the same value to a Set multiple times, it will only be stored once in the Set.

// new Set(): This is the constructor for creating a new Set instance. 
//            When you call new Set(), it initializes an empty Set with no values in it.

// Set Methods: 
//              new Set()	Creates a new Set
//              add()	Adds a new element to the Set
//              delete()	Removes an element from a Set
//              has()	Returns true if a value exists
//              clear()	Removes all elements from a Set
//              forEach()	Invokes a callback for each element
//              values()	Returns an Iterator with all the values in a Set
//              keys()	Same as values()
//              entries()	Returns an Iterator with the [value,value] pairs from a Set