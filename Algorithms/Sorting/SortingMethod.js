const letters = ["w", "o", "c", "p", "e", "r", "g", "h", "b", "j", "a"];
const basket = [2, 69, 12, 45, 63, 5, 26];

basket.letters(); // will sort by letters

basket.sort(); //doesnt work like expected, because it converts nums into a string

basket.sort(function (a, b) {   //this fixes the problem of number sorting
	return a - b;
});
