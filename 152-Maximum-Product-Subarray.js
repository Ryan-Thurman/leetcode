/**
 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function (nums) {
  let result = Math.max(...nums);
  let curMin = 1;
  let curMax = 1;

  for (n of nums) {
    if (n === 0) {
      curMax = 1;
      curMin = 1;
    }

    let tempMax = curMax * n;
    curMax = Math.max(n * curMax, n * curMin, n);
    curMin = Math.min(tempMax, n * curMin, n);

    result = Math.max(result, curMax, curMin);
  }

  return result;
};