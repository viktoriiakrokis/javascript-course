/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  // let sortA = A.sort();
  let newA = [ ];
  console.log(newA);
  
  for(let count = 0; count < A.length; count++) {
      if(A[count] % 2 == 0){
          newA.unshift(A[count]);
      } 
      else {
          newA.push(A[count]);
      }
  }
  
  return newA;
}