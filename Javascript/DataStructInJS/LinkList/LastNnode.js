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
  add(data) {
    let node = new Node(data);
    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  getNthFromEnd(n) {
    let current = this.head;
    if (this.head === null || n < 0) {
      return -1;
    }
    let first = this.head;
    let second = this.head;

    for (let i = 0; i < n; i++) {
      if (first === null) {
        return -1;
      }
      first = first.next;
    }
    while (first !== null) {
      first = first.next;
      second = second.next;
    }
    return second.data;
  }

  toString() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.data + '';
      current = current.next;
    }
    return result.trim();
  }
}

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
console.log(list.getNthFromEnd(2));
