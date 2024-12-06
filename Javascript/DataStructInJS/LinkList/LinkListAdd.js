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
    const node = new Node(data); // 新建节点
    if (!this.head) {
      // 如果没有头节点 就把新建节点赋值给头节点
      this.head = node;
    } else {
      // 如果有头节点 就把当前节点的next指向新建节点
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node; // 最后一个节点的next指向新建节点
    }
    this.size++; // 链表长度+1
  }
  getSize() {
    return this.size;
  }
}
const list = new LinkedList();
list.add('A');
list.add('B');
list.add('C');
list.add('D');
console.log(list);
console.log(list.getSize());
