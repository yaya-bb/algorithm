// 二分法
var minEatingSpeed = function (piles, h) {
  // 左闭右开区间
  let left = 1,
    right = Math.max(...piles) + 1;
  while (left < right) {
    let mid = left + ((right - left) >> 1);
    if (canFinish(piles, mid, h)) {
      // 因为是左闭右开区间  所以这里right = mid
      // 搜索左侧边界，则需要收缩右侧边界
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
// 吃完n根香蕉以speed的速度需要多少小时
function timeOf(n, speed) {
  return Math.floor(n / speed) + (n % speed > 0);
}
// piles堆香蕉以speed的速度能否在h小时内吃完
function canFinish(piles, speed, h) {
  let time = 0;
  for (let a of piles) {
    time += timeOf(a, speed);
  }
  return time <= h;
}