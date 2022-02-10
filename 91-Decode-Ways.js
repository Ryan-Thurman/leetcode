/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const dp = {};

  function dfs(i) {
    if (i in dp) {
      return dp[i];
    }

    if (s[i] ==="0") {
      return 0;
    }
    if (i >= s.length - 1) return 1;
    let result = dfs(i + 1);

    if (i + 1 < s.length && (s[i] + s[i + 1] < 27)) {
      result += dfs(i + 2);
    }
    dp[i] = result;
    return result;
  }

  return dfs(0);
};

// prev if condition
// s[i] === "1" || (s[i] === "2" && s[i + 1] <= 6 && s[i + 1] >= 0);
