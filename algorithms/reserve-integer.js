/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var newString = x.toString();
    
    var newArray = [];
    for(i = newString.length-1; i>=0; i--){
        if(newString[i] === '-'){
            newArray.unshift(newString[i]);
        } else {
            newArray.push(newString[i]);
        }      
    }
    var lastArray = Number(newArray.join(''));
    if(lastArray <= Math.pow(-2, 31) || lastArray >=Math.pow(2, 31)  ){
        return 0;
    }
    return lastArray;
};