/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var getKthFromEnd = function(head, k) {
  if(head == null) {
      return null;
  }
  let fast = head;
  let slow = head;
  let index = k - 1;
  while(index -- !== 0 && fast.next !== null) {
      fast = fast.next;
  }
  while(fast.next !== null && slow.next !== null) {
      fast = fast.next;
      slow = slow.next;
  }
  return slow;
};