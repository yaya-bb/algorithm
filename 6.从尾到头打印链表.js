// 递归处理-【空间复杂度为O(n)】
var reversePrint = function(head) {
  if(head == null) {
      return [];
  }
  let result = reversePrint(head.next);
  result.push(head.val);
  return result
};

// 空间复杂度为O(1)
// 先循环计算长度，后根据长度递减求出逆顺序
// var reversePrint = function(head) {
//   if(head == null) {
//       return [];
//   }
//   let length = 0;
//   let temp = head;
//   while(temp) {
//       length++;
//       temp = temp.next;
//   }
//   let result = [];
//   let k = length - 1;
//   while(length--) {
//       result[k--] = head.val;
//       head = head.next;
//   }
//   return result;
// };