// Time Complexity O(n), Space Complexity O(1)

function removeDuplicatesFromLinkedList(linkedList) {
    let prev = linkedList;
    let current = prev.next;
    while(current !== null) {
      if (current.value === prev.value) {
        prev.next = current.next;
        current = current.next;
      }
      else {
        current = current.next;
        prev = prev.next;
      }
    }
    return linkedList;
  }

  function printLinkedList(head) {
    let current = head;
    while(current !== null) {
        console.log(current.value);
        current = current.next;
    }
  }

  class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  const a = new LinkedList(1);
  const b = new LinkedList(1);
  const c = new LinkedList(3);
  const d = new LinkedList(4);
  const e = new LinkedList(4);
  const f = new LinkedList(4);
  const g = new LinkedList(5);
  const h = new LinkedList(6);
  const i = new LinkedList(6);

  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;
  f.next = g;
  g.next = h;
  h.next = i;

  console.log('original linked list with duplicates');
  printLinkedList(a);
  removeDuplicatesFromLinkedList(a);
  console.log('after removing duplicates from linked list');
  printLinkedList(a);