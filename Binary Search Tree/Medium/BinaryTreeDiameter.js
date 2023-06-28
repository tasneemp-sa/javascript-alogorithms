// Time O(n), Space O(h)

class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function binaryTreeDiameter(tree) {
    return getTreeInfo(tree).diameter;
  }
  
  function getTreeInfo(node) {
    if (node === null) return new TreeInfo(0, 0);
  
    let leftTreeInfo = getTreeInfo(node.left);
    let rightTreeInfo = getTreeInfo(node.right);
  
    let longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height;
    let maxDiamterSoFar = Math.max(rightTreeInfo.diameter, leftTreeInfo.diameter);
    let currDiameter = Math.max(longestPathThroughRoot, maxDiamterSoFar);
    let currHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);
  
    return new TreeInfo(currDiameter, currHeight);
  }
  
  class TreeInfo {
    constructor(diameter, height) {
      this.diameter = diameter;
      this.height = height;
    }
  }

  const a = new BinaryTree(1);
  const b = new BinaryTree(3);
  const c = new BinaryTree(2);
  const d = new BinaryTree(7);
  const e = new BinaryTree(4);
  const f = new BinaryTree(8);
  const g = new BinaryTree(5);
  const h = new BinaryTree(9);
  const i = new BinaryTree(6);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  d.left = f;
  e.right = g;
  f.left = h;
  g.right = i;

  console.log(binaryTreeDiameter(a));
