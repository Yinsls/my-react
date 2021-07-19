/**
 * [0,5,10] [3,6,10]  [5,9,11]  [11,15,5]
 * res: [[0,10], [5，11], [9,0]]
 */

// var filterBuildings = function (buildings) {
//   buildings.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);
//   const rooms = [buildings[0]];
//   // console.log('buildings: ', buildings);
//   for (let i = 1; i < buildings.length; i++) {
//     let prevRoom = rooms[rooms.length - 1];

//     if (prevRoom[1] >= buildings[i][1]) {
//       // right处于内部
//       if (prevRoom[0] === buildings[i][0] && prevRoom[1] === buildings[i][1]) {
//         if (prevRoom[2] < buildings[i][2]) {
//           rooms[rooms.length - 1] = buildings[i];
//         }
//       } else {
//         if (prevRoom[2] < buildings[i][2]) {
//           rooms.push(buildings[i]);
//         }
//       }
//     } else {
//       // right超出范围
//       if (prevRoom[0] === buildings[i][0] && prevRoom[2] < buildings[i][2]) {
//         rooms[rooms.length - 1] = buildings[i];
//       } else {
//         rooms.push(buildings[i]);
//       }
//     }
//   }
//   console.log('newBuildings: ', rooms);
//   return rooms;
// }


/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
  const result = [];
  let prevHeight = 0;
  buildings = filterBuildings(buildings);
  let range = [buildings[0][0], buildings[0][1]];
  for (let i = 0; i < buildings.length; i++) {
    if (range[0] <= buildings[i][0] && buildings[i][0] <= range[1]) {
      if (buildings[i][1] > range[1]) {
        range[1] = buildings[i][1];
        let height = buildings[i][2];
        // console.log('---: ', i, prevHeight, buildings[i - 1], buildings[i])
        if (prevHeight !== height) {
          if (height > prevHeight) {
            result.push([buildings[i][0], height]);
          } else {
            result.push([buildings[i - 1][1], height]);
          }
        }
      } else {
        if (i !== 0 && range[0] === buildings[i][0] && range[1] === buildings[i][1]) {
          console.log('===: ', i, prevHeight, buildings[i])
          if (buildings[i][2] > prevHeight) {
            result[result.length - 1] = [range[0], buildings[i][2]];
            prevHeight = buildings[i][2];
          }
        } else {
          if (prevHeight < buildings[i][2]) {
            result.push([buildings[i][0], buildings[i][2]]);
          }
        }
      }
      prevHeight = buildings[i][2];
    } else {
      prevHeight = buildings[i][2];
      range = [buildings[i][0], buildings[i][1]];
      result.push([buildings[i - 1][1], 0]);
      result.push([buildings[i][0], buildings[i][2]]);
    }

    if (i === buildings.length - 1) {
      result.push([range[1], 0]);
    }
  }
  return result;
};

// const store = [[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]];
// [2,10] [3,15]  [7,12] [12,0] [15,10] [20,8]  [24,0]

// const store = [[1, 20, 1], [1, 21, 2], [1, 22, 3]];
// const store = [[1, 2, 1], [1, 2, 2], [1, 2, 3]];
const store = [[1, 2, 1], [1, 3, 2], [1, 3, 1]];
// const store = [[1, 10, 10], [3, 11, 20], [4, 5, 8], [5, 10, 8], [6, 15, 20]];
// const store = [
//   [1, 38, 219], [2, 19, 228], [2, 64, 106], [3, 80, 65], [3, 84, 8],
//   [4, 12, 8], [4, 25, 14], [4, 46, 225], [4, 67, 187], [5, 36, 118],
//   [5, 48, 211], [5, 55, 97], [6, 42, 92], [6, 56, 188], [7, 37, 42],
//   [7, 49, 78], [7, 84, 163], [8, 44, 212], [9, 42, 125], [9, 85, 200],
//   [9, 100, 74], [10, 13, 58], [11, 30, 179], [12, 32, 215], [12, 33, 161],
//   [12, 61, 198], [13, 38, 48], [13, 65, 222], [14, 22, 1], [15, 70, 222],
//   [16, 19, 196], [16, 24, 142], [16, 25, 176], [16, 57, 114], [18, 45, 1],
//   [19, 79, 149], [20, 33, 53], [21, 29, 41], [23, 77, 43], [24, 41, 75],
//   [24, 94, 20], [27, 63, 2], [31, 69, 58], [31, 88, 123], [31, 88, 146],
//   [33, 61, 27], [35, 62, 190], [35, 81, 116], [37, 97, 81], [38, 78, 99],
//   [39, 51, 125], [39, 98, 144], [40, 95, 4], [45, 89, 229], [47, 49, 10], [47, 99, 152],
//   [48, 67, 69], [48, 72, 1], [49, 73, 204], [49, 77, 117], [50, 61, 174], [50, 76, 147],
//   [52, 64, 4], [52, 89, 84], [54, 70, 201], [57, 76, 47], [58, 61, 215], [58, 98, 57],
//   [61, 95, 190], [66, 71, 34], [66, 99, 53], [67, 74, 9], [68, 97, 175], [70, 88, 131],
//   [74, 77, 155], [74, 99, 145], [76, 88, 26], [82, 87, 40], [83, 84, 132], [88, 99, 99]
// ]
// [[1,219],[2,228],[19,225],[45,229],[89,190],[95,175],[97,152],[99,74],[100,0]]




// console.log(filterBuildings(store));

const setRoomIndex = function (builds) {
  const rooms = [];
  const map = new Map();
  for (let i = 0; i < builds.length; i++) {
    if (!map.has(builds[i][0])) {
      rooms.push([builds[i][0], i]);
    }
    if (!map.has(builds[i][1])) {
      rooms.push([builds[i][1], i]);
    }
    map.set(builds[i][0], true);
    map.set(builds[i][1], true);
  }
  rooms.sort((a, b) => a[0] - b[0]);
  return rooms;
}


/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (builds) {
  let res = [];
  const spotArr = setRoomIndex(builds);
  console.log('spotArr: ', spotArr);
  for (let i = 1; i < spotArr.length; i++) {
    const index = spotArr[i][1];
    let sMaxHeight = builds[index][2];
    for (let j = 0; j < index; j++) {
      if (builds[j][0] <= builds[index][0] && builds[index][0] <= builds[j][1]) {
        sMaxHeight = Math.max(sMaxHeight, builds[j][2]);
        // console.log('---: ', j, sMaxHeight)
      }
    }
    // console.log('maxHeight: ', sMaxHeight);

    if (builds[index][2] >= sMaxHeight) {
      res.push([builds[index][0], builds[index][2]]);
    }
  }
  res.push([builds[builds.length - 1][1], 0]);
  return res;
}
// [1,3, 99]  [2,3,199]
// [5, 100]

const result = getSkyline(store);
console.log('Reuslt: ', result);

