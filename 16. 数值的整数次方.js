//传统做法时间复杂度高，经不起测试，改用快速幂的思想
var myPow = function(x, n) {
  let reusult = 1.0
  //如果负数，2^-2可以编程 （1/2）^2
  if(n<0){
      //js中默认不是整除
      x = 1/x 
      n = -n
  }
  while(n>0){
      if(n&1){
          reusult*=x
      }
      x*=x
      //我的天，js中的移位还出错
      //原来是>>是有符号数的移位，>>>这个是无符号数的移位
      //下面第一种是错误的，剩下两个都是正确的
      // n = n>>1
      // n = Math.floor(n/2)
      n = n>>>1
  }
  return reusult
};