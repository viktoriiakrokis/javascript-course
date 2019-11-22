/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    var newString = x.toString();
    return newString.split('').every((element, index, array) => element === array[array.length-index-1]);
};