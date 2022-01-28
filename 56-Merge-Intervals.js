/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  let output = [intervals[0]];

  sortedIntervals.forEach((interval, idx) => {
    let lastEnd = output[output.length - 1][1];
    if (interval[0] <= lastEnd) {
      output[output.length - 1][1] = Math.max(lastEnd, interval[1]);
    } else {
      output.push(interval);
    }
  });
  return output;
};
