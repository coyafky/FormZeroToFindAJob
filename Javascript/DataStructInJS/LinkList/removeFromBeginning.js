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
    let mewNode = new Node(data);
    if (!this.head === null) {
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

  removeFromBeginning() {
    if (this.head === null) {
      return;
    }
    let current = this.head;
    this.head = current.next;
    this.size--;
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
}

const list = new LinkedList();
list.insertAtEnd('A');
list.insertAtEnd('B');
list.insertAtEnd('C');
list.insertAtEnd('D');
console.log(list.toString());
list.removeFromBeginning();
console.log(list.toString());
