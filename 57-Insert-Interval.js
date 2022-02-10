/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

var insert = function (intervals, newInterval) {
  let result = [];
  let inserted = false;

  for (let i = 0; i < intervals.length; i++) {
    if (newInterval[1] < intervals[i][0]) {
      result.push(newInterval);
      result.push(...intervals.slice(i));
      inserted = true;
      break;

    } else if (newInterval[0] > intervals[i][1]) {
      result.push(intervals[i]);
      
    } else {
      newInterval = [
        Math.min(newInterval[0], intervals[i][0]),
        Math.max(newInterval[1], intervals[i][1]),
      ];
    }
  }

  if (!inserted) result.push(newInterval);

  return result;
};