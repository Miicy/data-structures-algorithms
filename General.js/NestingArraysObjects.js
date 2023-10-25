// Nesting Arrays Inside Objects:

const person = {
	name: "John",
	hobbies: ["Reading", "Hiking", "Cooking"],
};

const firstHobby = person.hobbies[0]; // Reading

// Nesting Objects Inside Objects:

const person2 = {
	name: "John",
	address: {
		street: "123 Main St",
		city: "Anytown",
		zip: "12345",
	},
};

const city = person.address.city; // Anytown

// Nesting Objects Inside Arrays:

const people = [
	{
		name: "John",
		age: 30,
	},
	{
		name: "Jane",
		age: 25,
	},
];


const secondPersonAge = people[1].age; // 25

// Nesting Arrays Inside Arrays

const matrix = [
	[1, 2, 3],
	[4, 5, 6],
];

console.log(matrix[0][0]); // 1 (first row, first column)
console.log(matrix[0][1]); // 2 (first row, second column)
console.log(matrix[1][0]); // 4 (second row, first column)
console.log(matrix[1][2]); // 6 (second row, third column)


// Combining Nested Arrays and Objects:

const classroom = [
	{
		teacher: "Mr. Smith",
		students: ["Alice", "Bob", "Charlie"],
	},
	{
		teacher: "Ms. Johnson",
		students: ["David", "Emily", "Frank"],
	},
];

console.log(classroom[0].teacher); // "Mr. Smith"
console.log(classroom[1].students[2]); // "Frank"

// Dynamic Nesting Using Loops

const students = ["Alice", "Bob", "Charlie"];
const studentObjects = [];

for (let i = 0; i < students.length; i++) {
	studentObjects.push({ name: students[i] });
}

// Complex Nesting

const organization = {
	name: "TechCo",
	departments: [
		{
			name: "Engineering",
			teams: [
				{
					name: "Frontend",
					members: ["Alice", "Bob"],
				},
				{
					name: "Backend",
					members: ["Charlie", "David"],
				},
			],
		},
		{
			name: "Sales",
			teams: [
				{
					name: "North Region",
					members: ["Eve", "Frank"],
				},
			],
		},
	],
};

console.log(organization.name); // "TechCo"
console.log(organization.departments[0].name); // "Engineering"
console.log(organization.departments[0].teams[1].members[0]); // "Charlie"
console.log(organization.departments[1].teams[0].members[1]); // "Frank"