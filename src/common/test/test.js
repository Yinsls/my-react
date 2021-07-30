/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rowMap = new Map();
  const colMap = new Map();
  const boxMap = new Map();
  let boxIndex = 1;
  for (let i = 0; i < 9; i++) {
    rowMap.set(i, new Map());
    colMap.set(i, new Map());
    boxMap.set(i, new Map());
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const val = board[i][j];
      if (val !== '.') {
        boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (rowMap.get(i).has(val) || colMap.get(j).has(val) || boxMap.get(boxIndex).has(val)) {
          return false;
        } else {
          rowMap.get(i).set(val);
          colMap.get(j).set(val);
          boxMap.get(boxIndex).set(val);
        }
      }
    }
  }
  return true;
};
const store = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "6", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

const result = isValidSudoku(store);
console.log('Result: ', result);