 var cuttingRope = function(n) {
  if(n!=1 && n<4){
      return n-1;
  }
  let max = 1;
  while(n > 4){
      n = n - 3;
      max = max * 3 % (1e9+7); 
  }
  max = max * n % (1e9+7);
  return max;
};
