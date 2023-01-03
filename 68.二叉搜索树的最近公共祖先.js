// 由于这是二叉搜索树，因此根节点比左节点大，比右节点小
var lowestCommonAncestor = function(root, p, q) {
  while(root != null) {
      if(root.val < p.val && root.val < q.val) {
          root = root.right;
      }   else if(root.val > p.val && root.val > q.val) {
          root = root.left;
      } else {
          return root;
      }
  }
  return null;
};
// 时间复杂度:O(n)
// 空间复杂度:O(1)