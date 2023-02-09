/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  // 递归终止条件
  if(head == null || head.next == null)
  return head;
  let temp = reverseList(head.next);
  // 让2指向1——head是1
  head.next.next = head;
  // 让1指向null
  head.next = null;
  return temp;
};