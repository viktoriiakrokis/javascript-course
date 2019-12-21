/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
 
    
     if(s == 0 || s.length <= 0){
         return true;
     }
    
    var stack = [];
   
    for(let count = 0; count < s.length; count++){
        var num = s.charAt(count);
        
        if(num == '(' || num == '{' || num == '[') {
           stack.push(num);
            
        } else if(num === ')' && (stack[stack.length -1]) === '(' ) {
                stack.pop();
                
        } else if (num === '}' && (stack[stack.length -1]) === '{' ) {
                stack.pop();
                
        } else if (num === ']' && (stack[stack.length -1]) === '[' ) {
                stack.pop();
                 
        } else {
                 return false;

        }
       
    }
    
    if(stack.length == 0) {
        return true;
    } else {
        return false;
    }
    
    // if(stack[stack.length - 1] == '{' ||
    //   stack[stack.length - 1] == '(' ||
    //   stack[stack.length - 1] == '[' ) {
    //     return false;
    // }
    // return true; 
};