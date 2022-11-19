/**
 * 237. Delete Node in a Linked List
 */
var deleteNode = function (node) {
  let nodeToDelete = node.next;
  node.next = nodeToDelete.next;
  node.val = nodeToDelete.val;
  nodeToDelete.next = null;
  delete nodeToDelete;
};
