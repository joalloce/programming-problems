/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkTree = function(root) {
    if ( root === null || (root.left === null && root.right === null)) return true;
    let leftVal = root.left !== null ? root.left.val: 0;
    let rightVal = root.right !== null ? root.right.val: 0;
    if(root.val !== leftVal + rightVal) return false;
    return checkTree(root.left) && checkTree(root.right);
};
