// 和为s的连续正数序列
// 连续正整数中找出所有连续子数组累计和为target的列表，至少两个数字和
/**
 * @param {number} target
 * @return {number[][]}
 * @description 前缀和结合Map
 */
var findContinuousSequence = function (target) {
  if (target < 3) return [];
  const result = [];
  let sum = new Map();
  let reserveSum = new Map();
  let arr = [0];
  let i = 1;
  sum.set(0, 0);
  reserveSum.set(0, 0);
  while (true) {
    arr.push(i);
    sum.set(i, sum.get(i - 1) + i);
    reserveSum.set(sum.get(i - 1) + i, i);
    if (i + i - 1 >= target) {
      break;
    }
    i++;
  }

  for (let [key, val] of sum) {
    if (val === target) {
      result.push(arr.slice(1, key + 1));
    } else if (val >= target) {
      const prev = reserveSum.get(val - target);
      if (prev) {
        result.push(arr.slice(prev + 1, key + 1));
      }
    }
  }
  return result;
};

/**
 * @param {number} target
 * @return {number[][]}
 * @description 滑动窗口
 */
var findContinuousSequence = function (target) {
  let i = 1;
  let prev = 1;
  let next = 2;
  let arr = [0, 1, 2];
  let sum = 3;
  let res = [];
  const stop = target / 2;
  while (prev < stop) {
    arr.push(i + 2);
    if (sum < target) {
      next++;
      sum += arr[next]
    } else if (sum > target) {
      prev++;
      sum -= arr[prev - 1];
    } else {
      res.push(arr.slice(prev, next + 1));
      prev++;
      next = prev + 1;
      sum = arr[prev] + arr[next];
    }
    if (i < stop) i++;
  }
  return res;
}

const target = 9;
const result = findContinuousSequence(target);
console.log('Result: ', result);

// 1 2 3 4  5  6  7  8  9
// 1 3 6 10 15 21 28 36 45

// [1,2,3,4] => 10
// [2,3,4] [4,5] => 9
// [1,2,3,4,5],[4,5,6],[7,8] => 15
