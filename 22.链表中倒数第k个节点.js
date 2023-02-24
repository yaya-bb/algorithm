/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
* 思路: 快慢指针
* a.初始化快慢指针
* b.fast向后移动k个位置，然后fast和slow再一起向后移动；
* c.当fast走到最后的时候，slow的位置就是倒数第k个位置
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
- 时间复杂度：O(n)
- 空间复杂度：O(1)
