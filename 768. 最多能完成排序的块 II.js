/**
 * @param {number[]} arr
 * @return {number}
 */
 var maxChunksToSorted = function(arr) {
    const stack = [];
    for(let i = 0;i < arr.length ; i++)
    {
        a = arr[i];
    if(stack.length>0 && stack[stack.length-1]>a)
    {
        const curr = stack[stack.length-1];
        while(stack && stack[stack.length-1]>a)
        {
            stack.pop();
        }
        stack.push(curr);
    }else{
        stack.push(a);
    }
    }
    return stack.length;
    };