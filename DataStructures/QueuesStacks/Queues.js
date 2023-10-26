class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.lenght = 0;
	}
	peek() {
		return this.first;
	}
	enqueue(value) {
		const newNode = new Node(value);
		if (this.lenght === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			//whatever was last in line points to the new node, adn the new node is now last and points to null
			this.last.next = newNode;
			this.last = newNode;
		}
		this.lenght++;
		return this;
	}
	dequeue() {
        if(!this.first){
            return null;
        }else if(this.first === this.last) {
			this.last = null;
		}else{
            //whoever is after first becomes first
            this.first = this.first.next;
        }
        this.lenght--;
        return this;
    }
}

const myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("Ema");
myQueue.enqueue("Samir");
myQueue.dequeue();
myQueue.dequeue();
myQueue.peek();
