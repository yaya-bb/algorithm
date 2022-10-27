// 解法一:哈希
// ①由于随机指针的存在，当拷贝节点时，当前节点的随机指向的节点可能还没创建，因此用哈希表记录每一个节点对应的新节点
// ②先不考虑random指针，和原本的链表复制一样，创建新节点，并构造next指针关系，同时使用哈希表记录原节点和新节点的映射关系
// ③对原链表和新链表进行同时遍历，对于原链表的每个节点上的random都通过哈希表找到对应的新的random节点，并在新链表上构造random关系
// var copyRandomList = function(head) {
//     if(!head) return head;
//     let node = head;
//     let map = new Map();

//     // 复制节点，将新节点放入map中
//     while(node){
//         map.set(node, new Node(node.val));
//         node = node.next;
//     }
//     node = head;

//     //对map里的新节点进行遍历操作
//     while(node){
//         map.get(node).next = map.get(node.next) === undefined ? null : map. get(node.next);
//         map.get(node).random = map.get(node.random);
//         node = node.next;
//     }
//     return map.get(head);
// };
// ● 时间复杂度:O(n)
// ● 空间复杂度:O(n)
// 解法二：复制+拆分
// 思路:
// ①在原链表每一个节点后，复制一下节点，再为每一个新节点的random属性赋值
// ②将当前链表，按照一个间隔一个的顺序拆分开，将新节点，串成一个新链表，将原链表的节点，拆出来并组合成原链表
// ③将 原链表的最后一个节点的next指针，重新指向null
var copyRandomList = function(head){
    if(!head) return head;
    let node = head;

    // 复制节点，将新节点放到原节点后面
    while(node){
        node.next = new Node(node.val, node.next);
        node = node.next.next;
    }

    node = head;
    // 构建新节点的random指向
    while(node){
        if(node.random !== null)
        node.next.random = node.random.next;
        node = node.next.next;
    }

    // 拆分链表
    let newNode = head.next, res = newNode;
    node = head;
    while(node.next && newNode.next){
        node.next = node.next.next;
        newNode.next = newNode.next.next;
        node = node.next;
        newNode = newNode.next;
    }
    node.next= null;

    // 返回新链表的头结点
    return res;
}
// ● 时间复杂度:O(n)
// ● 空间复杂度:O(1)
