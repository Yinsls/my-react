function getLongArr(ranges) {
  let map = new Map();
  for (let i = 0; i < ranges.length; i++) {
    for (let j = ranges[i][0]; j <= ranges[i][1]; j++) {
      map.set(j, true);
    }
  }
  return map;
}

/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
  const map = getLongArr(ranges);
  for (let i = left; i <= right; i++) {
    if (!map.has(i)) {
      return false;
    }
  }
  return true;
}

// const store = [[1, 2], [3, 4], [5, 6]];
const store = [[1, 10], [1, 20]];
const left = 3;
const right = 21;
const result = isCovered(store, left, right);
console.log('Result: ', result);