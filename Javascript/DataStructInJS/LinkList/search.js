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

  search(data) {
    // 从头节点开始遍历链表
    let current = this.head;
    // 遍历链表，直到找到目标数据或者遍历完整个链表
    while (current !== null) {
      if (current.data === data) {
        // 如果找到了目标数据，返回 true
        return true;
      }
      // 否则，继续遍历下一个节点
      current = current.next;
    }
    // 如果遍历完整个链表都没有找到目标数据，返回 false
    return false;
  }
  Tostring() {
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
console.log(list.search('A'));
console.log(list.search('E'));
console.log(list.Tostring());
