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
		const newNode = {
			value: value,
			next: null,
		};
		newNode.next = this.head;
		this.head.next = newNode;
		this.length++;
		return this;
	}
	insert(index, value) {
		if (index >= this.length) {
			return this.append(value);
		}
		const newNode = {
			value: value,
			next: null,
		};
		const beforeNode = this.traverseToIndex(index - 1);
		const holdingPointer = beforeNode.next;
		beforeNode.next = newNode;
		newNode.next = holdingPointer;
		this.length++;
		return this;
	}
	traverseToIndex(index) {
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}
	remove(index) {
		const previousNode = this.traverseToIndex(index - 1);
		const unwantedNode = previousNode.next;
		previousNode.next = unwantedNode.next;
		this.length--;
        return this;
	}
	reverse() {
		if (this.head.next) {
			//checks if there is only one element
			return this.head;
		}
		let first = this.head;
		this.tail = this.head;
		let second = first.next;
		while (second) {
			const temporary = second.next;
			second.next = first;
			first = second;
			second = temporary;
		}
		this.head.next = null;
		this.head = first;
		return this;
	}
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(4);
myLinkedList.insert(9);
myLinkedList.remove(4);
myLinkedList.reverse();
console.log(myLinkedList);
