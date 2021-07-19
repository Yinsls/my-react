/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const arr = [];
  let cur1 = 0;
  let cur2 = 0;
  let val;
  while (cur1 < m || cur2 < n) {
    if (cur1 === m) {
      val = nums2[cur2++];
    } else if (cur2 === n) {
      val = nums1[cur1++];
    } else if (nums1[cur1] < nums2[cur2]) {
      val = nums1[cur1++];
    } else {
      val = nums2[cur2++];
    }
    arr.push(val);
  }

  for (let i = 0; i < m + n; i++) {
    nums1[i] = arr[i]
  }
  return nums1;
};


merge = function (nums1, m, nums2, n) {
  let cur1 = 0;
  let cur2 = 0;
  let val;
  while (cur1 < m + n) {
    if (cur1 === m) {

    }
  }
}



const arr1 = [1, 2, 3, 0, 0, 0,];
const arr2 = [2, 5, 6];
const m = 3;
const n = 3;

const result = merge(arr1, m, arr2, n);
console.log('Result: ', result);