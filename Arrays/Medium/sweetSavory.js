// Time O(nlogn), Space O(n)

function sweetAndSavory(dishes, target) {
  
    let sweet = dishes.filter(dish => dish < 0).sort((a,b) => Math.abs(a) - Math.abs(b));
    let savory = dishes.filter(dish => dish > 0).sort((a,b) => a - b);
  
    let bestCombination = [0, 0];
    let bestDiff = Infinity;
    let sweetIdx = 0, savoryIdx = 0;
  
    while(sweetIdx < sweet.length && savoryIdx < savory.length) {
      let currSum = sweet[sweetIdx] + savory[savoryIdx];
      if (currSum <= target) {
        let currDiff = target - currSum;
        if (currDiff < bestDiff) {
          bestDiff = currDiff;
          bestCombination = [sweet[sweetIdx], savory[savoryIdx]];
        }
        savoryIdx++;
      }
      else {
        sweetIdx++;
      }
      
    }
    
    return bestCombination;
  }

console.log(sweetAndSavory([-3, -5, 1, 7], 7));
console.log(sweetAndSavory([2, 5, -4, -7, 12, 100, -25], -20));
