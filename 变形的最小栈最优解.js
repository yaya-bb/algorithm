var MinStack = function( ) {
  this.stack = [ ];
  var min;
}
MinStack.proyptype.push = function( ) {
  if(stack.isEmpty( ) ) {
      min = x;
      stack.push(0);
  } else {
      // 计算差值
      var compare = x - min;
      stack.push(compare);
      // 如果差值小于0，显然x成为最小值，否则最小值不变
      min = compare < 0 ? x : min;
  }
}
MinStack.prototype.pop = function( ) {
  let top = stack.peek( );
  // 如果top小于0，显然最小值也会一并被删掉，此时更新最小值
  min = top < 0 ? (min - top) : min;
  stack.pop( );
}
MinStack.prototype.getMin = function( ) {
  return min;
}