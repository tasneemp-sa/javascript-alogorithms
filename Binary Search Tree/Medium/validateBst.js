// Time O(n), Space O(d)

class Node {
    constructor (data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

let a = new Node(5);
let b = new Node(1);
let c = new Node(4);
let d = new Node(3);
let e = new Node(6);

a.left = b;
a.right = c;
c.left = d;
c.right = e;
  
  function validateBst(tree) {
    return validateBstHelper (tree, Infinity, -Infinity);
  }
  
  function validateBstHelper(node, max, min) {
    if (node === null) return true;
    if (node.value < min || node.value >= max) return false;
    return validateBstHelper(node.left, node.value, min) && 
        validateBstHelper(node.right, max, node.value);  
  }

console.log(validateBst(a));