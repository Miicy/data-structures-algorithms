function printNumbersAndPairSumsWithFor(numbers) {
    console.log("these are numbers:");
    for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i];
      console.log(number);
    }
  
    console.log("and these are their sums:");
    for (let i = 0; i < numbers.length; i++) {
      const firstNumber = numbers[i];
      for (let j = 0; j < numbers.length; j++) {
        const secondNumber = numbers[j];
        console.log(firstNumber + secondNumber);
      }
    }
}

function printNumbersAndPairSums(numbers) {
	console.log("these are numbers:");
	numbers.forEach(function (number) {
		console.log(number);
	});

	console.log("and these are their sums:");
	numbers.forEach(function (firstNumber) {
		numbers.forEach(function (secondNumber) {
			console.log(firstNumber + secondNumber);
		});
	});
}

const inputArray = [1, 2, 3, 4, 5, 6];
printNumbersAndPairSums(inputArray);

//O[n^2]
