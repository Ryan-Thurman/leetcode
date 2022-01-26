/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  const stack = [];

  const closeToOpen = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i of s) {
    if (i === closeToOpen[stack[stack.length - 1]]) {
      if (stack.length > 0) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(i);
    }

    return stack.length === 0;
  }
};

console.log(isValid("()"));
