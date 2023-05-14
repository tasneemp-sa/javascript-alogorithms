// Time Complexity O(n), Space Complexity O(1)

function mergeOverlappingIntervals(array) {
    let mergedIntervals = [];
    array.sort((a,b)=> a[0] - b[0]);
    
    let startInterval = array[0][0];
    let endInterval = array[0][1];
    
    for (let i = 1; i < array.length; i++) {
      let currStart = array[i][0];
      let currEnd = array[i][1]; 
      if (currStart > endInterval) {
        mergedIntervals.push([startInterval, endInterval]);
        startInterval = currStart;
        endInterval = currEnd;
      }
      else if (currStart >= startInterval && currStart <= endInterval && 
               currEnd > endInterval) {
        endInterval = currEnd;
               }
    }
    mergedIntervals.push([startInterval, endInterval]);
    
    return mergedIntervals;
  }

  console.log(mergeOverlappingIntervals([[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]]));