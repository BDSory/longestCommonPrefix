/* Plain language: I need to compare the first letter of each string in the array and if they're all equal, push that into a new array. Then do it again on the second letter of each word, and if they're also all equal, push that onto the array. We should return the array when the comparison of string indices is not equal. 
*/
var longestCommonPrefix = function(strs) {
  let finalArray = [];
  let holdingTank = [];
  let counter = 0;
  for(let str of strs) {
    
    holdingTank.push(str[counter])
    
  }
  const allEqual = arr => arr.every(val => val === arr[0]);
  if(allEqual(holdingTank)) {
    finalArray.push(holdingTank[0])
  }
  return finalArray;
}
