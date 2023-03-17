/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var reverseKGroup = function (head, k) {
  if(!head) return null;
  let start = head, end = head;

  for(let i = 0; i < k; i++) {
      // 如果在还没遍历到第 k 个，end 空了，即 head 链表个数不满足 k 个，直接返回原链表
      if(!end) {
          return head;
      } else {
          end = end.next;
      }
  }

  let newHead = reverse(start, end); // 左闭右开区间
  start.next = reverseKGroup(end, k); // 翻转以后，原本的 start 指向的结点，变到了 end 的前一个，直接 start.next 继续递归翻转后续的就行
  return newHead;
};

// 反转区间 [a, b) 的元素，注意是左闭右开
function reverse (head, end) {
 let p = head, q, newHead; // p 在前面，q 跟在 p 的后面
 while(p !== end) {
     q = p; // q 赋值会原链表 p 的位置
     p = p.next; // p 继续向后遍历
     q.next = newHead;
     newHead = q;
 }
 return newHead;
};