//for

const colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

//while

const fruits = ["apple", "banana", "cherry"];
let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

//for...of

const animals = ["cat", "dog", "elephant"];
for (const animal of animals) {
  console.log(animal);
}

//for...in

const person = {
    name: "Alice",
    age: 30,
    city: "New York",
  };
  for (const property in person) {
    console.log(property + ": " + person[property]);
  }