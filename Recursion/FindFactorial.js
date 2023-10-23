//faktorijel je matematička funkcija kojom se izračunava proizvod prirodnih brojeva od 1 do nekog određenog prirodnog broja n

//recursion
function findFactorialRecursion(number) {
	if (number === 2) {
		answer = 2;
	}
	return number * findFactorialRecursion(number - 1);
}

findFactorialRecursion(5);

//loop
function findFactorialIterative(number) {
	let answer = 1;
	if (number === 2) {
		answer = 2;
	}
	for (let i = 2; i <= number; i++) {
		answer = answer * i;
	}
	return answer;
}

findFactorialIterative(5);
