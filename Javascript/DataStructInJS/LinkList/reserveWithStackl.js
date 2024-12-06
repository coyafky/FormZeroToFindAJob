class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAtEnd(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  toString() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + '';
      current = current.next;
    }
    return result.trim();
  }

  reserveUsingStack() {
    if (this.head === null) {
      return;
    }
    let stack = [];
    let current = this.head;

    while (current !== null) {
      stack.push(current.data);
      current = current.next;
    }

    this.head = stack.pop();
    current = this.head;
    while (stack.length !== 0) {
      current.next = stack.pop();
      current = current.next;
    }
    current.next = null; // 最后一个节点的 next 指针置为 null
  }
}

const list = new LinkedList();
list.insertAtEnd('A');
list.insertAtEnd('B');
list.insertAtEnd('C');
list.insertAtEnd('D');
console.log(list.toString()); // 输出: ABCD
list.reserveUsingStack();
console.log(list.toString()); // 输出: DCBA
