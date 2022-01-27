/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let result = [];

  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;

  while (left <= right && top <= bottom) {
    // left to right
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // get the right column
    for (let k = top; k <= bottom; k++) {
      result.push(matrix[k][right]);
    }
    right--;

    if (left >= right && top >= bottom) {
      break;
    }
    // get bottom column
    for (let j = right; j >= left; j--) {
      result.push(matrix[bottom][j]);
    }
    bottom--;

    // get left column
    for (let l = bottom; l >= top; l--) {
      result.push(matrix[l][left]);
    }
    left++;
  }

  return result;
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
