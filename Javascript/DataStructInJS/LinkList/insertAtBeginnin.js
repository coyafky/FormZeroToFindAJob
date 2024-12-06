class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }

}
class LinkedList{
  constructor(){
    this.head = null;
    this.size = 0;
  }

  insertAtBeginning(data){
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }
}

const list = new LinkedList();
list.insertAtBeginning('A');
list.insertAtBeginning('B');
list.insertAtBeginning('C');
console.log(list);
