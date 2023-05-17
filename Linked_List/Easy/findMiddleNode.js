// Time Complexity O(n), Space Complexity O(1);

function findMiddleNode(linkedList) {
    let slow = linkedList;
    let fast = linkedList;
    while (slow !== null && fast !== null) {
      
      //even list
      if (fast.next === null) {
        return slow;
      }
  
      //odd list
      else if (fast.next.next === null) {
        return slow.next;
      }
  
      else {
        slow = slow.next;
        fast = fast.next.next;
      }
    }
    return null;
  }

  class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  const a = new LinkedList(2);
  const b = new LinkedList(7);
  const c = new LinkedList(3);
  const d = new LinkedList(5);

  a.next = b;
  b.next = c;
  c.next = d;

  console.log(findMiddleNode(a));