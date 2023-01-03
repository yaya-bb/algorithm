// 思路：中序遍历的逆序
var kthLargest = function(root, k) {
  var stack = [];
  //  中序遍历:左 根 右 ，是一个有序的排列
  var inOrderTraverse = function(node) {
      if(node !== null){
         inOrderTraverse(node.left);
         stack.push(node.val);
         inOrderTraverse(node.right);
      }
  }
  inOrderTraverse(root);
  stack.reverse();
  return stack[--k];
};