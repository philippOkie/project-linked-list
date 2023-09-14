class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  getSize() {
    let current = this.head;
    let count = 0;

    while (current) {
      count++;
      current = current.next;
    }
    console.log("this is the size", count);
  }

  append(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  appendEnd(data) {
    let node = new Node(data);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  getAt() {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }

    return null;
  }

  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);
    let current, previous;

    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }

  clearList() {
    this.head = null;
    this.size = 0;
  }

  getHead() {
    let current = this.head;

    console.log("This is the head:", current);
  }

  getTail() {
    let current = this.head;
    let count = 0;

    while (current) {
      count++;
      current = current.next;
    }
    console.log("this is the tail", current);
  }

  printList() {
    let current = this.head;

    while (current) {
      console.log(current);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.append(100);
ll.append(200);
ll.append(300);
ll.appendEnd(400);
ll.insertAt(500, 2);
ggggggggggggggit oush

ll.removeAt(32);
ll.getHead();
ll.getSize();
ll.printList();
ll.getTail();

// ll.getAt(2);
