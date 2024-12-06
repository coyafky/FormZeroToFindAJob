class Node {
  constructor(data) {
    this.dada = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.isze = 0;
  }

  insertAtEnd(data) {
    let newNode = new Node(data);
    if (!head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
      this.size++;
    }
  }

  removeFormEnd() {
    if (this.head === null) {
      return;
    }
    if (this.head.next === null) {
      this.head = null;
    } else {
      let current = this.head;
      while (current.next.next !== null) {
        current = current.next;
      }
      current.next = null;
    }
    this.size--;
  }
}

const list = LinkedList();
list.insertAtEnd('A');
list.insertAtEnd('B');
list.insertAtEnd('C');
list.insertAtEnd('D');

list.removeFormEnd();
console.log(list);
