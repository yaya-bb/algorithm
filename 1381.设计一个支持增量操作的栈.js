    /**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    //用 maxSize 初始化对象，maxSize 是栈中最多能容纳的元素数量，栈在增长到 maxSize 之后则不支持 push 操作。
    this.max = maxSize;
    this.stack = [];

};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    //如果栈还未增长到 maxSize ，就将 x 添加到栈顶
    if(this.stack.length < this.max)
    {
        this.stack.push(x);
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    //弹出栈顶元素，并返回栈顶的值，或栈为空时返回 -1
   var res = this.stack.pop();
   return res == null ? -1 : res;
   

};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    for(let i = 0 ; i < this.stack.length;i++)
    {
        if(i <k)
        {
            this.stack[i] += val;
        }
    }
};
