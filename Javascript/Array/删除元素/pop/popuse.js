const myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

const poped = myFish.pop();

console.log(myFish); // [ 'angel', 'clown', 'mandarin' ]
console.log(poped); // sturgeon'

let arr = [1, 2, 3];
let lastElement = arr.pop();
console.log(lastElement); // 输出: 3
console.log(arr); // 输出: [1, 2]

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // 输出: 3
console.log(stack.peek()); // 输出: 2

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // 输出: 1
console.log(queue.peek()); // 输出: 2
