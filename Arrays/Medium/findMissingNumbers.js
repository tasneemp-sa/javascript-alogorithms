// Time O(n), Space O(n)

function missingNumbers(nums) {
    let includedNums = new Set(nums);
    let missingNums = [];
    for (let i = 1; i <= nums.length + 2; i++) {
      if (!includedNums.has(i)) missingNums.push(i);
    }
    return missingNums;
  }

  console.log(missingNumbers([1, 4, 3]));