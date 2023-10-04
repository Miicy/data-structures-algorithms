class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(value) {}
	lookut(value) {}
	remove() {}
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
//function to check if the tree is working by converting it to string
JSON.stringify(traverse(tree.root));

//9
// 4 20
//1 6 15 170

//function to check if the tree is working by converting it to string
function traverse(node) {
	const tree = {value: node.value}
	tree.left = node.left === null ? null :
	traverse (node.left);
	tree.right = node.right === null ? null :
	traverse (node.right);
	return tree;
}