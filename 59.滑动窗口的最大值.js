/*
 * @Author: -yayabb 2286834433@qq.com
 * @Date: 2023-04-24 23:42:24
 * @LastEditors: -yayabb 2286834433@qq.com
 * @LastEditTime: 2023-04-24 23:42:57
 * @FilePath: \algorithm\59.滑动窗口的最大值.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var maxSlidingWindow = function(nums, k) {
  if (k === 1) return nums;
  const length = nums.length;
  if (!length) return [];

  const left = new Array(length);
  const right = new Array(length);

  left[0] = nums[0];
  right[length - 1] = nums[length - 1];
  for (let i = 1; i < length; ++i) {
      if (i % k) {
          left[i] = Math.max(nums[i], left[i - 1]);
      } else {
          left[i] = nums[i];
      }

      let j = length - i - 1;
      if ((j + 1) % k) {
          right[j] = Math.max(nums[j], right[j + 1]);
      } else {
          right[j] = nums[j];
      }
  }

  const res = [];
  for (let i = 0; i < length - k + 1; i++) {
      res.push(Math.max(right[i], left[i + k - 1]));
  }
  return res;
};
