//edge list
const graph = [
	[0, 2],
	[1, 3],
	[2, 1],
	[1, 3],
];

//Adjacent List - can also be done with object
const graph1 = [[2], [2, 3], [0, 1, 2], [1, 2]];

//Adjacent Matrix/ 0 means no, 1 means yes
const graph2 = {
	0: [0, 0, 1, 0],
	1: [0, 0, 1, 1],
	2: [1, 1, 0, 1],
	3: [0, 1, 1, 0],
};
