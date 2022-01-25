/**
 * @param {number[]} height
 * @return {number}
 */

const maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let result = 0;

  while (left < right) {
    let area = (right - left) * Math.min(height[left], height[right]);
    result = Math.max(result, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return result;
};
