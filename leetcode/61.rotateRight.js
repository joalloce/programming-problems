/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 61. Rotate List
 */
var rotateRight = function (head, k) {
  if (!head) return head;
  let newHead = head;
  const length = getListLength(head);
  const tail = getListTail(head);

  k = k % length;

  if (k === 0) return head;
  if (length === 1) return head;

  let newTailPos = length - k;

  let currentNode = head;
  let numberNodesTraversed = 1;
  while (numberNodesTraversed < newTailPos) {
    numberNodesTraversed++;
    currentNode = currentNode.next;
  }

  newHead = currentNode.next;
  currentNode.next = null;
  tail.next = head;

  return newHead;
};

const getListLength = (head) => {
  let currentNode = head;
  length = 0;
  while (currentNode !== null) {
    ++length;
    currentNode = currentNode.next;
  }
  return length;
};

const getListTail = (head) => {
  let currentNode = head;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }
  return currentNode;
};
