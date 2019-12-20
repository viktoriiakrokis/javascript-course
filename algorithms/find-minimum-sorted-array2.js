/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let minNum = 1000;
    
    for(let i=0; i<nums.length; i++){
        if(nums[i] < minNum){
            minNum = nums[i];
        } 
        
    }
     return minNum; 
};