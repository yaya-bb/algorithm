var isSubStructure = function(A, B) {
    if(A == null || B == null) {
        return false;
    }
    // 是否以A为根节点的子树
    if(isSubTree(A, B)) {
        return true;
    }
    // 递归判断
    if(isSubStructure(A.left, B) || isSubStructure(A.right, B)) {
        return true;
    }
    return false;

}
// 递归
var isSubTree = function(Ta, Tb) {
        // 递归结束条件
        // Tb的节点是不是检查完了
        if(Tb == null) {
            return true;
        }
        // Ta没有子节点，而Tb还有子节点，说明匹配不成功
        if(Ta == null) {
            return false;
        }
        if(Ta.val != Tb.val) {
            return false;
        }
        return isSubTree(Ta.left, Tb.left) && isSubTree(Ta.right, Tb.right);
    }
// 时间复杂度: O(n*m)【n为树A的节点，m为树B的节点个数】先序遍历树 A 占用 O(n) ，每次调用 isSubTree判断占用 O(m)
// 空间复杂度: o(h）【h为树A的高度】