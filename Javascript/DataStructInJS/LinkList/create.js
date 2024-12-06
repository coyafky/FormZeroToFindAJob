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

  append(data) {
    const newNode = new Node(data);
    // 如果链表为空，直接将新节点作为头节点
    if (!this.head) {
      this.head = newNode;
    } else {
      // 如果链表不为空，遍历到最后一个节点，将新节点连接到最后一个节点的 next 属性上
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      // 将新节点连接到最后一个节点的 next 属性上
      current.next = newNode;
    }
    // 更新链表的长度
    this.size++;
  }

  // Tostring 方法

  toString() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.data + ' ';
      current = current.next;
    }
    return result.trim();
  }

  // 插入方法

  insert(index, data) {
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

  // 更新方法
  update(index, data) {
    if (index < 0 || index >= this.size) {
      throw new Error('Index out of range');
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    current.data = data;
  }

  get(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('Index out of range');
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.data;
  }

  indexOf(data) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1; // 数据不存在
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('Index out of range');
    }
    let current = this.head;
    if (index === 0) {
      this.head = current.next;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      current.next = current.next.next;
    }
    this.size--;
  }

  remove(data) {
    if (!this.head) {
      return; // 链表为空，无需删除
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        this.size--;
        return;
      }
      current = current.next;
    }
  }
}
