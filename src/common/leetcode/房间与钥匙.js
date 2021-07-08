/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const cloneRoom = new Array(rooms.length).fill(true);
  cloneRoom[0] = false;
  let keys = rooms[0];
  if (keys.length === 0) {
    if (rooms.length > 1) {
      return false;
    }
    return true;
  }

  while (keys.length > 0) {
    if (cloneRoom[keys[0]])
      keys = Array.from(new Set([...keys, ...rooms[keys[0]]]));
    const key = keys.splice(0, 1);
    if (cloneRoom[key[0]]) cloneRoom[key[0]] = false;
  }

  const surplus = cloneRoom.filter((room) => {
    return room;
  });

  if (surplus.length > 0) {
    return false;
  } else {
    return true;
  }
};

// const store = [[1, 3], [3, 0, 1], [2], [0]];
const store = [[1], [2], [3], []];
const res = canVisitAllRooms(store);
console.log("Result； ", res);
