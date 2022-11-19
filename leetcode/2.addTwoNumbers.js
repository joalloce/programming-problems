/**
 * 2. Add Two Numbers
 */
var addTwoNumbers = function (l1, l2) {
  let add1 = false;
  let current = new ListNode();
  let result = current;
  while (l1 || l2) {
    let sum = (l1?.val || 0) + (l2?.val || 0) + (add1 ? 1 : 0);
    l1 = l1?.next;
    l2 = l2?.next;

    add1 = sum > 9 ? true : false;
    current.next = new ListNode(sum % 10);
    current = current.next;
  }
  if (add1) {
    current.next = new ListNode(1);
  }
  return result.next;
};
