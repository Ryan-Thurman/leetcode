/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var uniquePaths = function(m, n) {
    let row = new Array(n).fill(1)

    for(let i = 0; i < m - 1; i++) {
        let newRow = new Array(n).fill(1)
        for(let j = n - 2; j >= 0; j--) {
            newRow[j] = newRow[j + 1] + row[j]
        }
        row = newRow
    }

    return row[0]
};

//  Recursive
// const key = m + ',' + n;
//      if (key in memo) return memo[key];
//      if (m === 1 && n === 1) return 1
//      if (m === 0 || n === 0) return 0;
     
//      memo[key] = uniquePaths(m-1, n, memo) + uniquePaths(m, n-1, memo);
//      return memo[key];