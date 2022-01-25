/**
 * @param {string} s
 * @return {number}
 */

function lengthOfLongestSubstring(s) {
  const charSet = new Set();
  let leftPointer = 0;
  let rightPointer = 0;
  let lengthResult = 0;
  let longestSubstring = "";

  while (rightPointer < s.length) {
    if (!charSet.has(s[rightPointer])) {
      charSet.add(s[rightPointer]);
      lengthResult = Math.max(lengthResult, charSet.size);
      rightPointer++;
    } else {
      charSet.delete(s[leftPointer]);
      leftPointer++;
    }
  }

  return lengthResult;
}
