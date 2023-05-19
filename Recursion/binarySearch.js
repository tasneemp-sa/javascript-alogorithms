// Time O(log n), Space O(log n)

function binarySearch(array, target) {
    return binarySearchHelper(array, 0, array.length - 1, target);
  }
  
  
  function binarySearchHelper (array, left, right, target) {
    if (left > right) return -1;
    
    let mid = Math.floor((left + right) / 2);
    if (target === array[mid]) return mid;
    else if (target < array[mid]) return binarySearchHelper(array, left, mid - 1, target);
    else return binarySearchHelper(array, mid + 1, right, target);
  }

  console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33));