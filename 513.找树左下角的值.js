/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var findBottomLeftValue = function(root) {
  let arr = [root]
  let left = null
  while (arr.length) {
      const next = []
      left = arr[0]
      arr.forEach(item => {
          item.left && next.push(item.left)
          item.right && next.push(item.right)
      })
      arr = next
  }
  return left.val
};
