var addTwoNumbers = function(l1, l2) {
  // 这道题需要解决进位问题
  // 空链表
  let dummy = new ListNode();
  // 进位值
  let carry = 0;
  // 用于遍历链表，默认头结点为空
  let curr = dummy;
  // 循环遍历
  while(l1 !== null || l2 !== null) {
      let sum = 0;
      if(l1 !== null) {
          sum += l1.val;
          l1 = l1.next;
      }
      if(l2 !== null) {
          sum += l2.val;
          l2 = l2.next;
      }
      sum += carry;
      curr.next = new ListNode(sum%10);
      carry = Math.floor(sum/10);
      curr = curr.next;
  }
  if(carry > 0) {
      curr.next = new ListNode(carry);
  }
  return dummy.next;
};