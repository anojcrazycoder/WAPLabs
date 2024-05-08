
/*
1. Use constructor function to implement a Singly LinkedList.

Use case:

let linkedlist = new LinkedList();

linkedlist.add(1);

linkedlist.add(2);

linkedlist.add(3);

linkedlist.print(); //Expected Result: LinkedList{1,2,3};

linkedlist.remove(2);

linkedlist.print(); //Expected Result: LinkedList{1,3};

*/

function LinkedList() {
    this.head = null;
  }
  
  LinkedList.prototype.addNode = function(value) {
    let newNode = { value: value, next: null };
    
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  };
  
  LinkedList.prototype.removeNode = function(value) {
    let current = this.head;
    let previous = null;
  
    while (current) {
      if (current.value === value) {
        if (previous) {
          previous.next = current.next;
        } else {
          this.head = current.next;
        }
        return;
      }
      previous = current;
      current = current.next;
    }
  };
  
  LinkedList.prototype.printList = function() {
    let current = this.head;
    let result = 'LinkedList{';
    while (current) {
      result += current.value + (current.next ? ',' : '');
      current = current.next;
    }
    result += '}';
    console.log(result);
  };
  
  // Usage:
  let linkedlist = new LinkedList();
  linkedlist.addNode(1);
  linkedlist.addNode(2);
  linkedlist.addNode(3);
  linkedlist.printList(); // Expected Result: LinkedList{1,2,3}
  linkedlist.removeNode(2);
  linkedlist.printList(); // Expected Result: LinkedList{1,3}
  