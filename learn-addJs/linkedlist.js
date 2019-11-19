// Create linked list

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


// Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

// Insert last node


// Insert in index


//  Get an index


// Remove at index


// Clear the list


// Print list data

  printListData () {
    let current = this.head;

    while(current) {
      console.log(current.data);
      current = current.next;
    }
  }
}


const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);

console.log(ll);

