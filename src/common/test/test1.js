function removeNum(arr) {
  let nums = [];
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let tar = arr[i].sort((a, b) => a - b);
    let str = tar.toString();
    if (!map.has(str)) {
      nums.push(arr[i]);
      map.set(str, true);
    }
  }
  return nums;
}

function isSame(arr1, arr2) {
  return arr1.toString() === arr2.toString();
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let map = new Map();
  let arr = [];
  let prev = 0;
  let next = 1;
  // nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i - 1] !== 'undefined' && isSame(nums[i], nums[i - 1])) {
      prev++;
      next = prev + 1;
      continue;
    }
    let nmap = new Map();
    for (let j = i + 1; j < nums.length; j++) {
      if (nmap.has(nums[j])) {
        if (isSame(nums[j], nums[j - 1])) {
          next = next++;
          continue;
        }
      }
      nmap.set(nums[j], true);
      let need = 0 - nums[prev] - nums[next];
      if (map.has(need) && map.get(need) > j) {
        arr.push([nums[prev], nums[next], need]);
      }
      next++;
    }

    prev++;
    next = prev + 1;
  }
  return removeNum(arr);
};

// const store = [-1, 0, 1, 2, -1, -4];
// const store = [-4, -1, -1, 0, 1, 2];
// const store = [0, 0, 0, 0, 0];
// const store = [-2, 0, 0, 2, 2];
// const store = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];
const store = [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6];
const result = threeSum(store);
console.log('Result: ', result);