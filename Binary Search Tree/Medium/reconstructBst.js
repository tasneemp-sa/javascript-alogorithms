// Time O(n^2), Space O(d) d =  depth of tree;

class BST {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  function reconstructBst(preOrderTraversalValues) {
    if (preOrderTraversalValues.length === 0) return null;
    let currentValue = preOrderTraversalValues[0];
    let rightSubtreeRootIdx = preOrderTraversalValues.length;
  
    for (let i = 1; i < preOrderTraversalValues.length; i++) {
      if (preOrderTraversalValues[i] >= currentValue) {
        rightSubtreeRootIdx = i;
        break;
      }
    }
  
    let leftSubTree = reconstructBst(preOrderTraversalValues.slice(1, rightSubtreeRootIdx));
    let rightSubTree = reconstructBst(preOrderTraversalValues.slice(rightSubtreeRootIdx));
    return new BST(currentValue, leftSubTree, rightSubTree);
  }

  console.log(reconstructBst([10, 4, 2, 1, 5, 17, 19, 18]));