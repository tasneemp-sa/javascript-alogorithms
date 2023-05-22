// Time O(n), Space O(1)

function findThreeLargestNumbers(array) {
    let threeLargest = [null, null, null];
    for  (const num of array) {
      updateLargest(threeLargest, num);
    }
    return threeLargest;
  }
  
  function updateLargest(array, num) {
    if (array[2] === null || num > array[2]) shiftAndUpdate(array, num, 2);
    else if (array[1] === null || num > array[1]) shiftAndUpdate(array, num, 1);
    else if (array[0] === null || num > array[0]) shiftAndUpdate(array, num, 0);
  }
  
  function shiftAndUpdate(array, num, idx) {
    for (let i = 0; i <= idx; i++) {
      if (idx === i) array[i] = num;
      else array[i] = array[i + 1];
    }
  }

  console.log(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]));