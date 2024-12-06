let arr = [1, 2, 3];
let firstElement = arr.shift();
console.log(firstElement); // 输出: 1
console.log(arr); // 输出: [2, 3]


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


let tasks = ['task1', 'task2', 'task3'];

function processTask(task) {
  console.log(`Processing task: ${task}`);
}

while (tasks.length > 0) {
  let task = tasks.shift();
  processTask(task);
}
// 输出:
// Processing task: task1
// Processing task: task2
// Processing task: task3