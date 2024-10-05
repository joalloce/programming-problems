/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    let queue1 = {};
    let queue2 = {};
    word1.split("").forEach(c => {
        if(queue1[c]) {
            queue1[c]++;
        } else {
            queue1[c] = 1;
        }
    });
    word2.split("").forEach(c => {
        if(queue2[c]) {
            queue2[c]++;
        } else {
            queue2[c] = 1;
        }
    });
    let maxDiff = 0;
    for(let c in queue1) {
        let count;
        if(queue2[c]) {
            count = queue2[c];
        } else {
            count = 0
        }
        let diff = Math.abs(queue1[c] - count)
        if (diff > maxDiff) maxDiff = diff;
    }
    for(let c in queue2) {
        let count;
        if(queue1[c]) {
            count = queue1[c];
        } else {
            count = 0
        }
        let diff = Math.abs(queue2[c] - count)
        if (diff > maxDiff) maxDiff = diff;
    }
    if (maxDiff > 3) return false;
    return true;
};
