// 哈希表解法:哈希表的方式就是遍历链表a并且把每个节点存入到哈希表中，在遍历链表b的时候去哈希表中取，如果有存在于哈希表中就找到了第一个公共节点
// 由于哈希表解法空间复杂度为O(n),因此使用双指针法进行解决
var getIntersectionNode = function(headA, headB) {
  let a = headA;
  let b = headB;
  while(a != b) {
      a = a != null ? a.next : headB;
      b = b != null ? b.next : headA;
 }
 return a;
};