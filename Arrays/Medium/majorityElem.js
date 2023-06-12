// Time O(n), Space O(1)

function majorityElement(array) {
    let count = 0;
    let result = -1;
    for (const value of array) {
      if (count === 0) result = value;
      if (result === value) count += 1;
      else count -= 1;
    }
    return result;
  }

  console.log(majorityElement([1, 2, 3, 2, 2, 1, 2]));