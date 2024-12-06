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

  toString() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.data + '';
      current = current.next;
    }
    return result.trim();
  }

  isPailindrome() {
    if (this.head === null || this.head.next === null) {
      return true;
    }
    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    let secondhalt = this.resverse(slow);
    let firsthalf = this.head;

    while (secondhalt !== null) {
      if (firsthalf.data !== secondhalt.data) {
        return false;
      }
      firsthalf = firsthalf.next;
      secondhalt = secondhalt.next;
    }
    this.resverse(slow); // 恢复链表
    return true;
  }
  resverse(node) {
    let prev = null;
    let current = node;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev;
  }
}

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(2);
list.add(1);
console.log(list.toString());
console.log(list.isPailindrome());
console.log(list.toString());
