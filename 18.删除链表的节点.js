/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    let dummy = new ListNode(0, head);
    let pre = dummy;
    let cur = head;
    while(cur !== null) {
        if(cur.val === val) {
            pre.next = cur.next;
            break;
        }
        pre = cur;
        cur = cur.next;
    }
    return dummy.next;
};
