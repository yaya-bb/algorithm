// 层序遍历
// 遍历到每层最后一个节点时加入res中
var rightSideView = function(root) {
  if(!root)
    return [];
  let queue = [root]; // 把根元素加入队列
  let res = []; // 用来存储每层最后一个元素值
  while(queue.length) {
      let n = queue.length;
      for(let i = 0; i < n; i++) {
          let node =  queue.shift(); // 取出队列第一个元素
          if(i === n - 1) res.push(node.val); // 当前一层的最后一个元素时，把值加入到res中
          node.left && queue.push(node.left);
          node.right && queue.push(node.right);
      }
  }
  return res;
};
<<<<<<< HEAD
// 时间复杂度:O(n)
// 空间复杂度:O(n)
=======
// 时间复杂度：O(n)
// 空间复杂度：O(n)
>>>>>>> 6391464de0873532adf4a179e834b7ae2f76f897
