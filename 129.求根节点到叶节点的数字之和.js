var sumNumbers = function(root) {
  let _result = 0
  function dfs(node, item) {
    if (node == null) return
    item = item + String(node.val)
    if (node.left == null && node.right == null) {
      _result += Number(item)
    }
    dfs(node.left, item)
    dfs(node.right, item)
  }
  dfs(root, '')
  return _result
}