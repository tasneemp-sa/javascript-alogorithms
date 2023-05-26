// Time O(n), Space O(d)

function minHeightBst(array) {
  return minHeightBstHelper(array, 0, array.length - 1);
}

function minHeightBstHelper(arr, low, high) {
  if (low > high) return null;
  let mid = Math.floor((low + high) / 2);
  let node = new BST(arr[mid]);
  node.left = minHeightBstHelper(arr, low, mid - 1);
  node.right = minHeightBstHelper(arr, mid + 1, high);
  return node;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

console.log(minHeightBst([1, 2, 5, 7, 10, 13, 14, 15, 22]));