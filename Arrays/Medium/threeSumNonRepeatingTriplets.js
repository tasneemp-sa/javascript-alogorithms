// Time O(n^2), Space O(n)

var threeSum = function(nums) {
    let result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {

        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let currentSum = nums[i] + nums[left] + nums[right];
            if (currentSum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                while(nums[left] === nums[left - 1] && left < right) 
                    left++;
            }
            else if (currentSum < 0) left++;
            else right--;
        }
    }
    return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));