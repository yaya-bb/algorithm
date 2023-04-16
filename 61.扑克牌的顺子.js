 var isStraight = function(nums) {
  let map = new Map(), i, len = nums.length, max = 0, min = 14;
  for(i = 0; i < len; i++) {
      // 如果是大小王，可以当做赖子，直接跳过就行
      if(nums[i] === 0) continue;
      // 如果有重复，不可能连成对
      if(map.has(nums[i]))
          return false;
      map.set(nums[i], 1);
      max = Math.max(max, nums[i]);
      min = Math.min(min, nums[i]);
  }
  return max - min < 5;
};
