/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  const stack = [];

  const closeToOpen = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i in s) {
    if (closeToOpen.hasOwnProperty(i)) {
      if (stack.length > 0 && stack[stack.length - 1] == close[i]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(i);
    }
  }

  return stack.length > 1 ? true : false;
};
