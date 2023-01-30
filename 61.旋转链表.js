/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 
/*
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next)
    return head;
    let count = 0;
    now = head;
    while(now){
        now = now.next;
        count++;
    }
    k = k%count;
    let slow = (fast = head);
    while(fast.next){
        if(k--<= 0){
            slow = slow.next;
        }
        fast = fast.next;
    }
    fast.next = head;
    let res = slow.next;
    slow.next = null;
    return res;
};
- 时间复杂度：O(n)
