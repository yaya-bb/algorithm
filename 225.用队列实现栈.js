var MyStack = function() {
  // this.queue1 = [];
  // // 辅助队列
  // this.queue2 = [];
  // 方法2：一个队列实现栈
  this.queue = [];
};

/** 
* @param {number} x
* @return {void}
*/
MyStack.prototype.push = function(x) {
  // this.queue1.push(x);
  let len = this.queue.length;
  this.queue.push(x);
  // 将除了需要出队元素外的元素取出来再加入
  while(len--) {
      this.queue.push(this.queue.shift());
  }
};

/**
* @return {number}
*/
MyStack.prototype.pop = function() {
  // // 减少两个队列交换的次数，只有当queue为空时，交换两个队列
  // if(!this.queue1.length) {
  //     [this.queue1, this.queue2] = [this.queue2, this.queue1];
  // }
  // // 当队列1的元素大于1的时候不断将元素push进备份队列
  // while(this.queue1.length > 1) {
  //     // shift()方法用于把数组的第一个元素从其中删除，并返回第一个元素的值
  //     this.queue2.push(this.queue1.shift());
  // }
  // // 最后将队列1最后一个元素出列
  // return this.queue1.shift();
  return this.queue.shift(); 
};

/**
* @return {number}
*/
MyStack.prototype.top = function() {
  // // 查看栈顶，队列出队，然后在push进队列1
  // const x = this.pop();
  // this.queue1.push(x);
  // return x;
  let top = this.pop();
  this.push(top);
  return top;
};

/**
* @return {boolean}
*/
MyStack.prototype.empty = function() {
  // return !this.queue1.length && !this.queue2.length;
  return this.queue.length === 0;
};

/**
* Your MyStack object will be instantiated and called as such:
* var obj = new MyStack()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/