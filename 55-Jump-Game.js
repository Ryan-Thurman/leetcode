/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
    let goalPost = nums.length - 1

    for(let i = nums.length -1; i >= 0; i--) {
        if(i + nums[i] >= goalPost) {
            goalPost = i
        }

        
    }
    return goalPost === 0 ? true : false

};