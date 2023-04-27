

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  class linkList1 {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    push(val) {
      let node = new Node(val);
  
      if (!this.head) {
        this.head = node;
        this.tail = this.head;
      } else {
        this.tail.next = node;
        this.tail = node;
      }
      this.length++;
      return this;
    }
    remove() {
      if (!this.head) {
        return undefined;
      } else {
        let new1 = this.tail;
        let newTail = new1;
  
        while (new1.next) {
          this.tail = newTail;
          this.tail.next = null;
        }
  
        this.length--;
        return new1;
      }
    }
  }
  
  console.clear();
  let LinkedList = new linkList1();
  console.log(LinkedList.push(36));
  console.log(LinkedList.push(20));
  
  console.log(LinkedList.push([6, 8, 9]));
  console.log(LinkedList.push({ name: "Ayomide" }));
  console.log(LinkedList.push(08));
  console.log("");
  console.log(LinkedList.length);
  
  LinkedList.remove();
  
  console.log("");
  console.log(LinkedList.length);