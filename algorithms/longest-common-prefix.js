/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

	var prefix = "";
    
    if(strs.length === 0){
        return prefix;
    }
    
    for(var iWord = 0; iWord<strs[0].length; iWord++){    
        for(var iArray = 0; iArray<strs.length; iArray++){
            if(strs[0][iWord] !== strs[iArray][iWord] ){
                return prefix;
            }
            
        }
		prefix = prefix.concat(strs[0][iWord]);
    }
    return prefix;
};