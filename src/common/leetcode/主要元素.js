// 主要元素

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  let maxLength = 0;
  let num = 0;
  for (let [key, val] of map) {
    if (maxLength < val) {
      maxLength = val;
      num = key;
    }
  }

  if (maxLength * 2 > nums.length) {
    return num;
  }
  return -1;
};

const store = [2, 3, 3];
const result = majorityElement(store);
console.log('Result: ', result);