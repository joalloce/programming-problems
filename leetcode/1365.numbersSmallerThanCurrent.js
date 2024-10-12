/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let sortedNums = [...nums].sort((a,b) => a - b);
    return nums.map(n => sortedNums.indexOf(n))
};
