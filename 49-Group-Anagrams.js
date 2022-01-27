/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const result = {};

  strs.forEach((str, idx) => {
    let count = new Array(26).fill(0);
    let a = "a".charCodeAt(0);
    for (let i of str) {
      count[i.charCodeAt(0) - a] += 1;
    }
    if (!result.hasOwnProperty(count)) {
      result[count] = [str];
    } else {
      result[count] = [...result[count], str];
    }
  });

  return Object.values(result);
};
