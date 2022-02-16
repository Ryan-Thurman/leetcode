/**
 * @param {number[]} nums
 * @return {number}
 */

 var rob = function(nums) {
    let max1 = 0 
    let max2 = 0

    for(n of nums) {
        let temp = Math.max(n + max1, max2)
        max1 = max2
        max2 = temp
    }

    return max2
};