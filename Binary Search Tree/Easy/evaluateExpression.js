// Time O(n), Space O(d) d = depth of tree

class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function evaluateExpressionTree(tree) {
    if (tree.value >= 0) return tree.value;
  
    let leftValue = evaluateExpressionTree(tree.left);
    let rightValue = evaluateExpressionTree(tree.right);
    
    if (tree.value == -1) {
        return  leftValue + rightValue;
      }
    if (tree.value == -2) {
      return leftValue - rightValue;
    }
    if (tree.value == -3) {
      if ((leftValue / rightValue) < 0) return -Math.floor(Math.abs(leftValue / rightValue));
      return Math.floor(leftValue / rightValue);
    }
    if (tree.value == -4) {
      return leftValue * rightValue;
    }
    return tree.value;
  }

  let a = new BinaryTree(-1);
  let b = new BinaryTree(-2);
  let c = new BinaryTree(-3);
  let d = new BinaryTree(-4);
  let e = new BinaryTree(2);
  let f = new BinaryTree(8);
  let g = new BinaryTree(3);
  let h = new BinaryTree(2);
  let i = new BinaryTree(3);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  d.left = h;
  d.right = i;
  c.left = f;
  c.right = g;

  console.log(evaluateExpressionTree(a));
