var isBalanced = function(root) {
  if(root == null) return true;
  if(maxDepth(root) == -1) return false;
  return true;
};
var maxDepth = function(root) {
  if (root == null) return 0;
  var left = maxDepth(root.left);
  if(left == -1) return -1;
  var right = maxDepth(root.right);
  if(right == -1) return -1;
  // 返回-1表示不符合条件
  if(Math.abs(left - right) > 1) return -1;
  return Math.max(left, right) + 1;
}
// 时间复杂度:O(n)
// 空间复杂度:O(n)