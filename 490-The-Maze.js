function hasPath(maze, start, destination) {
  let directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let m = maze.length;
  let n = maze[0].length;

  let stack = [start];
  let seen = new Set();
  seen.add(start);

  while (stack.length > 0) {
    let [x, y] = stack.shift();

    for (let [dx, dy] of directions) {
      let nX = x;
      let nY = y;
      while (nX >= 0 && nX < m && nY >= 0 && nY < n && maze[nX][nY] == 0) {
        nX += dx;
        nY += dy;
      }
      nX -= dx;
      nY -= dy;

      //   if (maze[nX][nY] != 0) {
      //     continue;
      //   }

      if (nX == destination[0] && nY == destination[1]) {
        return true;
      }

      //   maze[nX][nY] = 2;

      if (!seen.has([nX, nY])) {
        stack.push([nX, nY]);
        seen.add([nX, nY]);
      }
    }
  }

  return false;
}

let maze = [
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0],
];

let start = [0, 4];
let destination = [4, 4];

let s2 = [0, 4];
let d2 = [3, 2];

// console.log(hasPath(maze, start, destination));
console.log(hasPath(maze, s2, d2));
