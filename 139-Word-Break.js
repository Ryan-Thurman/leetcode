/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    let wordSet = new Set(wordDict);
    const dp = Array(s.length + 1).fill(false);
    dp[dp.length - 1] = true;

    for (let start = s.length - 1; start >= 0; start--) {
        for (let end = s.length; end >= 0; end--) {
            if (dp[end] && wordSet.has(s.slice(start, end))) {
                dp[start] = true;
				break;
            }
        }
    }
    
    return dp[0];
};

console.log(wordBreak("leetcode", ["leet", "code"]));
