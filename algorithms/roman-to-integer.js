/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  
  var sum = 0;
  for(var i = 0; i<s.length; i++ )  {
    switch (s[i]) {
      case 'I':
        sum+= 1;
        break;
      case 'V':
        sum+= 5;
        if(s[i-1] === 'I') {
          sum -= 2;
        };
        break;
      case 'X':
        // IX = 1 + 10 = 11 (9)
        sum+= 10;
        if(s[i-1] === 'I') {
          sum -= 2;
        };
        break;
      case 'L':
        sum+= 50;
        if(s[i-1] === 'X') {
          sum -= 20;
        };
        break;
      case 'C':
        sum+= 100;
        if(s[i-1] === 'X') {
          sum -= 20;
        };
        break;
      case 'D':
        sum+= 500;
        if(s[i-1] === 'C') {
          sum -= 200;
        };
        break;
      case 'M':
        sum+= 1000;
        if(s[i-1] === 'C') {
          sum -= 200;
        };
        break;       
      default:
        console.log('I don\'t know why it doesn\'t works')
    }
  }
    
  return sum;
};