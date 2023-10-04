class Node {
	//this is our class for repetitive code bellow when making new nodes
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
		};
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		//we are generating a method to append for our Linked List - o(1) - no loops
		const newNode = {
			value: value,
			next: null,
		};
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}
	prepend(value) {
		//we are generating a method to preappend for our Linked List- o(1) - no loops
		const newNode = {
			//since this code gets repetitive for each method we can make it a class too
			value: value,
			next: null,
		};
		// const newNode = new Node(value);     	//this would be a new node with reusable class from above
		newNode.next = this.head;
		this.head.next = newNode;
		this.length++;
		return this;
	}
	insert(index, value) {
		//check params if we want
		if (index >= this.length) {
			return this.append(value);
		}
		const newNode = {
			value: value,
			next: null,
		};
		const beforeNode = this.traverseToIndex(index - 1); //creating a new method that gets index and grabs the before node
		const holdingPointer = beforeNode.next;
		beforeNode.next = newNode;
		newNode.next = holdingPointer;
		this.length++;
		return this;
	}
	traverseToIndex(index) {
		//check params if we want
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}
	remove(index) {
		//check params if we want
		//remove pointer from rpevios node and update it to the one after deleted one
		const previousNode = this.traverseToIndex(index - 1);
		const unwantedNode = previousNode.next;
		previousNode.next = unwantedNode.next;
		this.length--;
	}
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(4);
myLinkedList.insert(9);
myLinkedList.remove(4);
console.log(myLinkedList);
