/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(q === null && p === null) return true;
    if(q === null || p === null ) return false;
    let queueP = [p];
    let queueQ = [q];
    while(queueP.length && queueQ.length) {
        if(queueP.length !== queueQ.length) return false;
        let nodeP = queueP.shift();
        let nodeQ = queueQ.shift();
        if(nodeP.val !== nodeQ.val) return false;
        if(nodeP.left) queueP.push(nodeP.left);
        if(nodeQ.left) queueQ.push(nodeQ.left);
        if(queueP.length !== queueQ.length) return false;
        if(nodeP.right) queueP.push(nodeP.right);
        if(nodeQ.right) queueQ.push(nodeQ.right);
        if(queueP.length !== queueQ.length) return false;
    }
    return true;
};
