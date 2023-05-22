// Time O(n), Space O(1)

function bestSeat(seats) {
    let bestSeat = -1;
    let maxSpace = 0;
    let left = 0;
    while (left < seats.length) {
      let right = left + 1;
      while(right < seats.length && seats[right] === 0) {
        right++;
      }
      let availableSpace = right - left - 1;
      if (availableSpace > maxSpace) {
        bestSeat = Math.floor((left + right) / 2);
        maxSpace = availableSpace;
      }
      left = right;
    }
   
    return bestSeat;
  }

  console.log(bestSeat([1, 0, 1, 0, 0, 0, 1]));