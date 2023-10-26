class DoublyLinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
            prev:null           //We need to add prev pointer
		};
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const newNode = {
			value: value,
			next: null,
            prev:null           //We need to add prev pointer
		};
        newNode.prev = this.tail;   //We need to add prev pointer, cause append is added to the end of the list
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}
	prepend(value) {
		const newNode = {
			value: value,
			next: null,
            prev:null           //We need to add prev pointer
		};
		newNode.next = this.head;
        this.head.prev = newNode;   //cause its added to the beggining it needs to point to the new node, the previos of former 1st element
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
            prev:null,           //We need to add prev pointer
		};
		const beforeNode = this.traverseToIndex(index - 1); 
		const holdingPointer = beforeNode.next;
		beforeNode.next = newNode;
        newNode.prev = beforeNode;          //point to before node
		newNode.next = holdingPointer;
        holdingPointer.prev = newNode;      //node after to the new node
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
