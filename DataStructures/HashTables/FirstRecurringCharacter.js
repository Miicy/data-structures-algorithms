//means the first character that repeats at least twice

//Given array array = [2, 5, 1, 2, 3, 4, 5, 2, 1, 2]
//Should return 2

//Given array array = [2, 1, 1, 2, 3, 5, 1, 2, 4]
//Should return 1

//Given array array = [3, 4, 5]
//Should return undefined

//worst way with nested loops - O(n^2)
function firstRecurringCharacter(input) {
	for (let i = 0; i < input.length; i++) {
		for (let j = i + 1; j < input.length; j++) {
			if (input[i] === input[j]) {
				return input[i];
			}
		}
	}
	return undefined;
}

//loop all items, add them to hash table, while we are doing that check if key already exists - O(n)
function firstRecurringCharacter2(input) {
	let mapObject = {};

	for (let i = 0; i < input.length; i++) {
		if (mapObject[input[i]] !== undefined) {
			//if key already exists just return that item
            console.log(input[i]);
			return input[i];
		} else {
			//if not add it to the map
			mapObject[input[i]] = i;
		}
		console.log(mapObject);
	}

	return undefined;
}

firstRecurringCharacter2([2, 5, 1, 2, 3, 4, 5, 2, 1, 2]);


//additional exercise detect [2, 5, 5, 2, 3, 4, 5, 2, 1, 2] 5, not 2