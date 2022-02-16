/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let longest = 0;

  for (let n of set) {
    if (!set.has([n - 1])) {
      let length = 0;

      while (nums.includes(n + length)) {
        length += 1;
      }

      longest = Math.max(longest, length);
    }
  }

  return longest;
};
