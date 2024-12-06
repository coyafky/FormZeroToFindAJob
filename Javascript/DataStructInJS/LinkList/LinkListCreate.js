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
}

const list = new LinkedList();
list.head = new Node('A');
list.head.next = new Node('B');
list.head.next.next = new Node('C');
list.head.next.next.next = new Node('D');

console.log(list);   // 
// LinkedList {
//   head: Node { data: 'A', next: Node { data: 'B', next: [Node] } },
//   size: 0
// }
