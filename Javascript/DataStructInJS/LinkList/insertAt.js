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

  insertAt(data, index) {
    // 如果索引超出范围，直接返回，或者是是链表为空
    if (index < 0 || index > this.size) {
      return;
    }
    // 创建节点
    let newNode = new Node(data);
    // 如果索引为0，将新节点插入到头部
    if (index === 0) {
      newNode.next = this.head;
    } else {
      // 否则，找到索引位置的前一个节点，将新节点插入到该节点之后
      let current = this.head;
      // 遍历到索引位置的前一个节点
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      // 将新节点插入到该节点之后
      newNode.next = current.next;
      // 将该节点的 next 指向新节点
      current.next = newNode;
    }
    // 链表长度加一
    this.size++;
  }
}

// 使用示例
const list = new LinkedList();
list.insertAt(0, 'A');
list.insertAt(1, 'C');
list.insertAt(1, 'B');
list.insertAt(3, 'D');
console.log(list.toString()); // 输出: A B C D
