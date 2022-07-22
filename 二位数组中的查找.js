/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var findNumberIn2DArray = function(matrix, target) {
    // 空值处理
    if(!matrix.length) return false;
    // n行m列
    const n = matrix.length, m = matrix[0].length;
    // 最大值越界处理,避免浪费遍历
    if(target > matrix[n-1][m-1]) return false;

    // 遍历每一行
    for(let row = 0; row < n; row++) {
        if(target >= matrix[row][0]) { //target大于本行首元素，本行可能存在该整数
            // 如果target大于本行尾元素，直接跳到下一行,避免浪费遍历
            if(target > matrix[row][m-1]) {
                continue;
            }
            else { //target不小于本行的首元素并且不大于尾元素，本行可能存在该整数
                // 在matrix[row]数组上进行查找，一旦大于target就结束本行查找，跳到下一行
                let col = 0;
                while(col < m) {
                    if(target == matrix[row][col]) { //找到target
                        return true;
                    } else if(target > matrix[row][col]) { //继续向右查找
                        col++;
                    } else { //结束本行查找
                        break;
                    }
                }
            }
        } else return false;  //target小于本行首元素，还没找到就说明不存在，可以提前终止，避免浪费遍历
    }
    return false; //最糟糕的情况，一直找到最后一行还是没找到，说明不存在
};