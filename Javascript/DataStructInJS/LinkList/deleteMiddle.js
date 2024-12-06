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

  insertAtEnd(dada) {
    let newNode = new Node(dada);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }


  deleteMiddle() {
    // 如果链表的头节点为空或只有一个节点，则将头节点设置为空
    if (this.head === null || this.head.next === null) {
      this.head = null;
      return;
    }
    // 使用快慢指针找到链表的中间节点
    let slow = this.head;
    let fast = this.head;
    let prev = null;

    // 快指针每次移动两步，慢指针每次移动一步
    while (fast!== null && fast.next!== null) {
      fast = fast.next.next;
      prev = slow;
      slow = slow.next;
    }
    // 将前一个节点的 next 指针指向中间节点的下一个节点，从而删除中间节点
    prev.next = slow.next;
    // 链表长度减 1
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
list.deleteMiddle();
console.log(list.toString());

// 链表初始化为 A -> B -> C -> D。
// deleteMiddle() 被调用。
// slow 指向 A，fast 指向 A，prev 为 null。
// 循环迭代：
// fast 移动到 C，slow 移动到 B，prev 更新为 A。
// fast 移动到 null，循环结束。
// prev.next (即 A.next) 被设置为 slow.next (即 C)。
// 链表变为 A -> C -> D。
// toString() 方法将链表转换为字符串 "ACD"。
