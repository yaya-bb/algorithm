var isSymmetric = function(root) {
  if(root == null || (root.left == null && root.right == null)) {
      return true;
  }
  return isSame(root.left, root.right);
};
var isSame = function(A, B) {
  if(A == null && B == null) {
      return true;
  }
  if(A == null || B == null) {
      return false;
  }
  if(A.val != B.val) {
      return false;
  }
  return isSame(A.left, B.right) && isSame(A.right, B.left);
}
// 时间复杂度：O(n)
// 空间复杂度：O(n).【n为树的高度】