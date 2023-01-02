/**
 * @param {number[]} postorder
 * @return {boolean}
 */
 var verifyPostorder = function(postorder) {
  if(postorder.length <= 2)
      return true;
  // 后序遍历中最后一个元素为根节点
  let root = postorder[postorder.length - 1];
  // 寻找第一个大于根节点的元素，它为分界点，前面为左子树，后面为右子树
  let index = postorder.findIndex(item => item > root);
  // 进行分割
  let left = postorder.slice(0, index);
  let right = postorder.slice(index, postorder.length-1);
  if(Math.min(...right, root) !== root)
      return false;
  return verifyPostorder(left) && verifyPostorder(right);
};