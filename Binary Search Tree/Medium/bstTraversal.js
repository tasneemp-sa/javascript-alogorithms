// Time O(n), Space O(d)

class BSTNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    }
}

function inOrderTraverse(tree, array) {
    if (tree === null) return;
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
    return array;
  }
  
  function preOrderTraverse(tree, array) {
    if (tree === null) return;
    array.push(tree.value);
    preOrderTraverse(tree.left, array);
    preOrderTraverse(tree.right, array);
    return array;
  }
  
  function postOrderTraverse(tree, array) {
    if (tree === null) return;
    postOrderTraverse(tree.left, array);
    postOrderTraverse(tree.right, array);
    array.push(tree.value);
    return array;
  }

  let a = new BSTNode(9);
  let b = new BSTNode(4);
  let c = new BSTNode(17);
  let d = new BSTNode(3);
  let e = new BSTNode(6);
  let f = new BSTNode(10);
  let g = new BSTNode(22);
  let h = new BSTNode(5);
  let i = new BSTNode(7);
  let j = new BSTNode(20);


  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.left = f;
  c.right = g;
  e.left = h;
  e.right = i;
  g.left = j;

  console.log(inOrderTraverse(a, []));
  console.log(preOrderTraverse(a, []));
  console.log(postOrderTraverse(a, []));
