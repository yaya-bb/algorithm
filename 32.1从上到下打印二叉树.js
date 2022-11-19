// 该题目使用队列进行求解，先进先出原则
 var levelOrder = function(root) {
  // 判断头结点是否为空，为空则创建一个空数组
  if(root == null) {
      return [];
  }
  // 辅助队列
  // 默认将头结点加入到队列中
  let queue = [root];
  // 数组存取结果
  let res = [];
  // 循环队列
  while(queue.length) {
      // 将队列最上面拿出来
      // shift() 方法用于把数组的第一个元素从其中删除,并返回第一个元素的值
      let t = queue.shift();
      res.push(t.val);
      if(t.left != null) {
          queue.push(t.left);
      }
      if(t.right != null) {
          queue.push(t.right);
      }
  }
  return res;
};
// 时间复杂度：O(n)
// 空间复杂度: O(n)