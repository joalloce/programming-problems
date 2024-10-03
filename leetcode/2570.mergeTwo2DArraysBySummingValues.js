/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    let numTable = {};
    nums1.forEach(num => {
        if(numTable[num[0]]) {
            numTable[num[0]] += num[1];
        } else {
            numTable[num[0]] = num[1];
        }
    });
    nums2.forEach(num => {
        if(numTable[num[0]]) {
            numTable[num[0]] += num[1];
        } else {
            numTable[num[0]] = num[1];
        }
    });
    let result = []
    for (let key in numTable) {
        result.push([parseInt(key), numTable[key]])
    }
    return result;
};
