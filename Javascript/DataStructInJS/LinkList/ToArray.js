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

  // 定义一个方法 toArray
  toArray() {
    // 初始化一个指针 current，指向链表的头节点
    let current = this.head;
    // 初始化一个空数组 array，用于存储链表中的数据
    let array = [];
    // 遍历链表，直到 current 指向 null（即链表的末尾）
    while (current !== null) {
      // 将当前节点的数据添加到数组中
      array.push(current.data);
      // 将 current 指针指向下一个节点
      current = current.next;
    }
    // 返回包含链表中所有数据的数组
    return array;
  }
}

const list = new LinkedList();
list.insertAtEnd('A');
list.insertAtEnd('B');
list.insertAtEnd('C');
list.insertAtEnd('D');

console.log(list.toArray());
