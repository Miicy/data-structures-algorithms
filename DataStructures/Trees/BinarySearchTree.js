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
	insert(value) {
		const newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
		} else {
			let currentNode = this.root;
			while (true) {
				if (value < currentNode.value) {
					//left
					if (!currentNode.left) {
						currentNode.left = newNode;
						return this;
					} else {
						currentNode = currentNode.left;
					}
				} else {
					//right
					if (!currentNode.right) {
						currentNode.right = newNode;
						return this;
					} else {
						currentNode = currentNode.right;
					}
				}
			}
		}
	}
	lookut(value) {
		if (!this.root === null) {
			return false;
		}
		let currentNode = this.root;
		while (currentNode) {
			//left
			if (value < currentNode.value) {
				currentNode = currentNode.left;
			} else if (value > currentNode.value) {
				//right
				currentNode = currentNode.right;
			} else if (currentNode.value === value) {
				return currentNode;
			}
			return false;
		}
	}
	remove(value) {
		if (!this.root === null) {
			return false;
		}
		let currentNode = this.root;
		let parentNode = null;
		while (currentNode) {
			if (value < currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.left;
			} else if (value > currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.right;
			} else if (currentNode.value === value) {
				//match found
				//option 1: no right child
				if (currentNode.right === null) {
					this.root = currentNode.left;
				} else {
					//if parent is > than current value, make left child child of parent
					if (currentNode.value < parentNode.value) {
						parentNode.left = currentNode.left;
						//if parent is < current value, make right child of parent
					} else if (currentNode.value > parentNode.value) {
						parentNode.right = currentNode.left;
					}
				}
				//option 2: right child which doesnt have a left child
			} else if (currentNode.right.left === null) {
				if (parentNode === null) {
					this.root = currentNode.left;
				} else {
					currentNode.right.left = currentNode.left;
					//if parent > current, make right child of the left parent
					if (currentNode.value < parentNode.value) {
						parentNode.left = currentNode.right;
						//if parent < current, make the right child, a right child of the parent
					} else if (currentNode.value > parentNode.value) {
						parentNode.right = currentNode.RIGHT;
					}
				}
				//option 3: right child that has a left child
			} else {
				//find the rights child's left most child
				let leftMost = currentNode.right.left;
				let leftMostParent = currentNode.right;
				while (leftMost !== null) {
					leftMostParent = leftMost;
					leftMost = leftMost.left;
				}
				//parents left subtree is now leftmost right subtree
				leftMostParent.left = leftMost.right;
				leftMost.left = currentNode.left;
				leftMost.right = currentNode.right;

				if (parentNode === null) {
					this.root = leftMost;
				} else {
					if (currentNode.value < parentNode.value) {
						parentNode.left = leftMost;
					} else if (currentNode.value > parentNode.value) {
						parentNode.right = leftMost;
					}
				}
			}
			return true;
		}
	}
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.lookup(9);
//function to check if the tree is working by converting it to string
// JSON.stringify(traverse(tree.root));

//9
// 4 20
//1 6 15 170

//function to check if the tree is working by converting it to string
function traverse(node) {
	const tree = { value: node.value };
	tree.left = node.left === null ? null : traverse(node.left);
	tree.right = node.right === null ? null : traverse(node.right);
	return tree;
}
