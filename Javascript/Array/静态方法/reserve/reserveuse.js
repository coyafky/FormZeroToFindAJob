let arr = [1, 2, 3, 4, 5];

arr.reverse();

console.log(arr);

// 反转字符串

let str = 'helloworld';
let reversedStr = str.split('').reverse().join('');
console.log(reversedStr); // 输出: 'olleh'

// 反转链表

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
}
let list = new LinkedList();
list.head = new Node(1);
list.head.next = new Node(2);
list.head.next.next = new Node(3);

list.reverse();
console.log(list.head.value); // 输出: 3
