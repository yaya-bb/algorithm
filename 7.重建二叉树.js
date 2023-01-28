/**
 * @param {number[]} preorder前序
 * @param {number[]} inorder中序
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
  // 过滤
  if(!preorder.length || !inorder.length){
      return null
  }

  // 根据先序排序：根左右
  // 所以根就是preorder第一个
  // shift():把数组的第一个元素从其中删除，并返回第一个元素的值
  const rootValue = preorder.shift();
  // 根据中序排序 ：左根右
  //找出根值的下标，进行划分左右区间
  let rootValueIndex = inorder.indexOf(rootValue);
  // 构建树
  const root = new TreeNode(rootValue);
  // 构建左右
  // 根据先序排序：根左右
  // 第一个参数：
  // preorder第二个元素是左区的第一个根节点,所以从第二个元素截取到 根植的下标（0，根植）。slice特性的原因（包左不包右）
  // 然后inorder左边就是0到根植的下标，取左期间
  // slice():从已有的数组中返回选定的元素
  root.left = buildTree(preorder.slice(0,rootValueIndex),inorder.slice(0,rootValueIndex))
  //然后preorder截取根值之后，第二个参数就是拿inorder右区间
  root.right = buildTree(preorder.slice(rootValueIndex),inorder.slice(rootValueIndex+1));
  return root
};
- 时间复杂度：O(n)
