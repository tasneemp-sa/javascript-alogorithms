// Time O(n), Space O(n)

function zeroSumSubarray(nums) {
    let sums = new Set();
    let currentSum = 0;
    sums.add(currentSum);
    for (const num of nums) {
      currentSum+= num;
      if (sums.has(currentSum)) return true;
      sums.add(currentSum);
    }
    return false;
  }

  console.log(zeroSumSubarray([-5, -5, 2, 3, -2]));