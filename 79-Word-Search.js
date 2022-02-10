/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let rows = board.length;
  let cols = board[0].length;

  function dfs(r, c, i) {
    if (i === word.length ) {
      return true;
    }

    if (r < 0 || c < 0 || r >= rows || c >= cols || word[i] !== board[r][c]) {
      // out of bounds
      // see char we arent looking for
      // already have the char in the set
      return false;
    }

    const char = board[r][c];
    board[r][c] = "-";

    let res =
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1);

    board[r][c] = char;
    return res;
  }

  for (let i = 0; i <= rows; i++) {
    for (let j = 0; j <= cols; j++) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
};
