//Stacks linked lists

class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.lenght = 0;
	}
	peek() {
		return this.top;
	}
	push(value) {
		//we use constructor from above
		const newNode = new Node(value);
		//check if it is very first node on empty stack, so top and bottom point on the same node
		if (this.lenght === 0) {
			this.top = newNode;
			this.bottom = newNode;
		} else {
			//if not then
			const previosNode = this.top;
			this.top = newNode;
			this.top.next = previosNode;
		}
		this.lenght++;
		return this;
	}
	pop() {
		//check if there is an item
		if (!this.top) {
			return null;
		}
		//we have to do this because js is garbage collector language it would be removed if we dont reference it, unless thats what we want
		// const beforeNode = this.top;

		//if we are poping the last one in stack, make this.bottom null
		if (this.top === this.bottom) {
			this.bottom = null;
		}
		this.top = this.top.next;
		this.lenght--;
		return this;
	}
}

const MyStack = new Stack();
MyStack.push("Micy");
MyStack.push("Neo");
MyStack.peek();
MyStack.pop();

//Stacks arrays
//Arrays already have push and pop methods - Simpler than linked lists

class Stack {
	constructor() {
		this.array = [];
	}
	peek() {
		//look at very end of array
		//we say -1 because index starts at 0 and lenght starts at 1
		return this.array[this.array.length - 1];
	}
	push(value) {
		//we already have push method for arrays
		this.array.push(value);
		return this;
	}
	pop() {
		//we also have pop method for arrays
		this.return.pop();
		return this;
	}
}

const MyStackArray = new Stack();
MyStackArray.push("Micy");
MyStackArray.push("Neo");
MyStackArray.peek();
MyStackArray.pop();
