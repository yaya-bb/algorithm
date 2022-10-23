/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
  let dummy = new ListNode(0);
  // 用来保存第一个节点，因为指针也会向前移动
  let temp = dummy;
  while(l1 != null && l2 != null) {
      if(l1.val < l2.val) {
          temp.next = l1;
          l1 = l1.next;
      } else {
          temp.next = l2;
          l2 = l2.next;
      }
      // 指针也随着移动下一个
      temp = temp.next;
  }
  // 最后剩下不为空的链表需要加入到链表中
  temp.next = l1 == null ? l2 : l1;
  return dummy.next;
};