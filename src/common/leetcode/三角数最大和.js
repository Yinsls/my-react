const store = [[7], [3, 8], [8, 1, 10]];

function run2(triangle) {
  const len = triangle.length;
  let dp = new Array(len + 1).fill(0);
  for (let i = len - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[j] = Math.max(dp[j], dp[j + 1]) + triangle[i][j];
    }
    console.log(dp);
  }
  return dp[0];
}

const result = run2(store);
console.log('Result: ', result);