// 最长增序列数
const nums = [1, 5, 2, 4, 3];

function getLongLength(nums) {
  var long = 0;
  for (let i = 0; i < nums.length; i++) {
    var arr = [nums[i]];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < arr[arr.length - 1]) {
        if (nums[j] > nums[i]) {
          arr[arr.length - 1] = nums[j];
        }
      } else {
        arr.push(nums[j]);
      }
    }
    if (arr.length > long) long = arr.length;
  }
  return long;
}

const result = getLongLength(nums);
console.log("Result: ", result);
