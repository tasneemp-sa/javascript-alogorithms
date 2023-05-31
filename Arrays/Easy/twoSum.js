// Time O(n), Space O(n)

var twoSum = function(nums, target) {
    let visited = new Map();
    for (let i = 0; i < nums.length; i++) {
        let currentElem = nums[i];
        let difference = target - currentElem;
        if (visited.has(difference)) return [visited.get(difference), i];
        visited.set(currentElem, i);
    }
    return [0, 0];
};

console.log(twoSum([2, 7, 11, 15], 9));