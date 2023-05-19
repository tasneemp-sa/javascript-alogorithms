// Time O(n), Space O(d), d = depth
function productSum(array, depth = 1) {
  let prodSum = 0;
  for (const elem of array) {
    if (Array.isArray(elem)) {
      prodSum+= productSum(elem, depth + 1);
    }
    else {
      prodSum+= elem;
    }
  }
  return prodSum * depth;
}

console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]));