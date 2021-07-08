var arr = [1, 1, 1, 2, 2, 3, 4, 4, 5];
// 1,2,3,4,5 => 5
function removeDubble(arr) {
  let prev = 1, after = 1;
  while (after < arr.length) {
    if (arr[after] !== arr[after - 1]) {
      arr[prev] = arr[after];
      prev++;
    }
    after++;
  }
  return prev;
}

const result = removeDubble(arr);
console.log('Result: ', result);
