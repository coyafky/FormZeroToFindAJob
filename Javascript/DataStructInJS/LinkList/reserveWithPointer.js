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
    if (this === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
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

  reserve() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current !== null) {
      // 使用一个循环来遍历链表，只要 current 不为 null，就继续循环
      // next = current.next;：将 current 的下一个节点存储在 next 变量中。
      next = current.next;
      // 将 current 的 next 指针指向 prev，即当前节点的前一个节点，这样就完成了当前节点的反转
      current.next = prev;
      // prev = current;：将 prev 变量更新为当前节点 current，这样下一次循环时，prev 就变成了当前节点的前一个节点。
      prev = current;
      // current = next;：将 current 变量更新为 next，这样下一次循环时，current 就变成了下一个节点。
      current = next;
    }
    // this.head = prev;：当循环结束时，prev 变量指向链表的最后一个节点，也就是新的头节点，因此将 this.head 指向 prev，完成链表的反转
    // 最后将 this.head 指向 prev，这样链表的头节点就变成了原来的尾节点，完成了链表的反转。
    this.head = prev;
  }
}

const list = new LinkedList();
list.insertAtEnd('A');
list.insertAtEnd('B');
list.insertAtEnd('C');
list.insertAtEnd('D');
console.log(list.toString());
list.reserve();
console.log(list.toString());
