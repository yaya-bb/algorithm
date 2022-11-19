// 层序遍历+队列
var levelOrder = function(root) {
  if(root == null) {
      return [];
  }
  let queue = [root];
  let res = [];
  while(queue.length) {
      let len = queue.length;
      // 临时数组
      let tmp = [];
      for(let i = 0; i < len; i++) {
          let node = queue.shift();
          tmp.push(node.val);
          node.left && queue.push(node.left);
          node.right && queue.push(node.right);
      }
      res.push(tmp);
  }
  return res;
};
// 时间复杂度:O(n)
// 空间复杂度:O(n)