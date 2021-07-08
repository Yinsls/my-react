// 获取数组内目标和数量
// [0,0,1,0] 1
// [0,0,1,0]  [0,1,0] [1,0] [0,1]

/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  let sum = 0;
  let prev = 0;
  let after = 0;
  let maxTotal = 0;
  while (prev < nums.length) {
    sum += nums[after];
    // 后指针向后移动查找最长子数组
    if (sum < goal) {
      after++;
    } else if (sum === goal) {
      maxTotal++;
      if (after + 1 < nums.length && nums[after + 1] === 0) {
        after++;
      } else {
        prev++;
        after = prev;
        sum = 0;
      }
    } else {
      prev++;
      after = prev;
      sum = 0;
    }

    if (after === nums.length) {
      prev++;
      after = prev;
      sum = 0;
    }
  }
  return maxTotal;
};

// 官方解答
var numSubarraysWithSum = function (nums, goal) {
  let sum = 0;
  const cnt = new Map();
  let ret = 0;
  for (const num of nums) {
    cnt.set(sum, (cnt.get(sum) || 0) + 1);
    sum += num;
    ret += cnt.get(sum - goal) || 0;
    console.log(cnt);
  }
  return ret;
};

const nums = [0, 0, 1, 0];
const goal = 0;
const result = numSubarraysWithSum(nums, goal);
console.log("Result: ", result);
