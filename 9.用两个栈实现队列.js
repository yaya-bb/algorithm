// 实现思路: 利用栈先进后出、队列先进进出的特点，队列尾部插入整数用于入栈的数组push实现
//队列头部删除整数，先判断用于出栈的数组是否有值，没有值则将用于入栈的数组pop出的数组push进出栈数组，实现逆置，则出栈数组pop出的数值是对头的值
var CQueue = function() {
    // 输入栈，用于压入appendTail传入的数据
	this.inStack = [];
    // 输出栈，用于deleteHead操作
    this.outStack = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
 this.inStack.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
	if(!this.outStack.length) {
		while(this.inStack.length) {
          this.outStack.push(this.inStack.pop());
        }
	}
    return this.outStack.length ? this.outStack.pop() : -1;
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

// 时间复杂度:O(1)
// 空间复杂度:O(n)