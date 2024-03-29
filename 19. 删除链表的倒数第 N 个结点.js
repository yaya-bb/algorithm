var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(0, head);
  let slow = fast = dummy;
  while(n--) fast = fast.next;
  while(fast.next !== null) {
      fast = fast.next;
      slow = slow.next;
  };
  slow.next = slow.next.next;
  return dummy.next;
};
- 时间复杂度：O(n)
- 空间复杂度：O(1)
