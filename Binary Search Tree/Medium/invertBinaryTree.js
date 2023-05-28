// Time O(n), Space O(d) d = depth of binary tree

function invertBinaryTree(tree) {
    if (tree === null) return;
    let temp = tree.left;
    tree.left = tree.right;
    tree.right = temp;
    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
    return tree;
  }

  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  let a = new BinaryTree(1);
  let b = new BinaryTree(2);
  let c = new BinaryTree(3);
  let d = new BinaryTree(4);
  let e = new BinaryTree(5);
  let f = new BinaryTree(6);
  let g = new BinaryTree(7);
  let h = new BinaryTree(8);
  let i = new BinaryTree(9);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.left = f;
  c.right = g;
  d.left = h;
  d.right = i;

  console.log(invertBinaryTree(a));
