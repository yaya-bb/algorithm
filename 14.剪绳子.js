var cuttingRope = function(n) {
  if(n!=1&&n <= 3) return n - 1;
  let times = Math.floor(n / 3);
  let rest = n % 3;
  if(rest === 0) return Math.pow(3, times);
  else if(rest === 1) return Math.pow(3, times - 1) * 4;
  else return Math.pow(3, times) * 2;
};