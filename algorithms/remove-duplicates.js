/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   
  var length = 0;
  for(var i = 0; i<nums.length; i++){
      if( nums[i] !== nums[i-1]){
          length++;

      } else {
          nums.splice(i, 1);
          i--;
      }

  }
  
  return length;
};