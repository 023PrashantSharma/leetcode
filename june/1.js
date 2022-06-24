/***
 * Running sum of 1-D array
 */
var runningSum = function(nums) {
    let result = []
    let sum = 0
    for(let i=0;i<nums.length;i++){
        result.push(sum + nums[i])
        sum = result[result.length-1]
    }
    console.log(result)
    return result;
};
runningSum([1,2,3,4])
/***
 * By using simple loop function i just iterate all item in array @nums
 * and added value in @sum varible.
 * Intial set a sum 0 and push in an new array @result and return result array 
 */