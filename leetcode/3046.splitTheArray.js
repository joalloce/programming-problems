/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
    let numSet = {};
    for (let i = 0; i < nums.length; i++) {
        if(numSet[nums[i]]) {
            if(numSet[nums[i]] === 2) {
                return false;
            }
            numSet[nums[i]]++;
        } else {
            numSet[nums[i]] = 1;
        }
    }
    return true;
};
