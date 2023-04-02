const binaryTreePaths = (root) => {
  const res = [];

  const buildPath = (root, pathStr) => {
    if (root == null) { // 遍历到null
      return;           // 结束当前递归分支
    }
    if (root.left == null && root.right == null) { // 遍历到叶子节点
      pathStr += root.val; // 路径末尾了，不用加箭头
      res.push(pathStr);   // 加入解集
      return;
    }
    pathStr += root.val + '->'; // 处理非叶子节点，要加箭头
    buildPath(root.left, pathStr); // 基于当前的pathStr，递归左子树
    buildPath(root.right, pathStr); // 基于当前的pathStr，递归右子树
  };

  buildPath(root, '');
  return res;
};