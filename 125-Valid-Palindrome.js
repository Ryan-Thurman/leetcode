/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const stripped = s.toLowerCase().replace(/[^a-z\d]/g, "");
  return stripped === stripped.split("").reverse().join("");
};
