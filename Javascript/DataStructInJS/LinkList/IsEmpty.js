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

  isEmpty() {
    return this.head === null;
  }

  insertAt(index, data) {
    if (index < 0 || index > this.size) {
      throw new Error('Index out of range');
    }
    const newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
    }
    this.size++;
  }

  toString() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.data + ' ';
      current = current.next;
    }
    return result.trim();
  }
}

// 使用示例
const list = new LinkedList();
console.log(list.isEmpty()); // 输出: true
list.insertAt(0, 'A');
console.log(list.isEmpty()); // 输出: false
