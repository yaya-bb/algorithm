var exchange = function(nums) {
  let i = 0, j = nums.length - 1
  while (true) {
      while ((nums[i] & 1) && i < nums.length) {
          i++
      }
      while (!(nums[j] & 1) && j >= 0) {
          j--
      }
      if (i >= j) {
          break
      }
      [nums[i], nums[j]] = [nums[j], nums[i]]
  }
  return nums
};
