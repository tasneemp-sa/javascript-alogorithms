// Time O(n), Space O(n)

class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function findKthLargestValueInBst(tree, k) {
    let inOrderArr = []
    inOrderTraversal(tree, inOrderArr);
    console.log(inOrderArr);
    if (inOrderArr.length >= k) return inOrderArr[inOrderArr.length - k];
    else return -1;
  }
  
  function inOrderTraversal(node, resultArr) {
    if (node === null) return;
    inOrderTraversal(node.left, resultArr);
    resultArr.push(node.value);
    inOrderTraversal(node.right, resultArr);
    return resultArr;
  }


  let a = new BST(15);
  let b = new BST(5);
  let c = new BST(20);
  let d = new BST(2);
  let e = new BST(5);
  let f = new BST(17);
  let g = new BST(22);
  let h = new BST(1);
  let i = new BST(3);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.left = f;
  c.right = g;
  d.left = h;
  d.right = i;

  console.log(findKthLargestValueInBst(a, 3));