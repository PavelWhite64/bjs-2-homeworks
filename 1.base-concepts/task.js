"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = Math.pow(b, 2) - 4 * a * c;
  
  if (discriminant > 0) {
    let arr1 = (-b + Math.sqrt(discriminant) ) / (2 * a);
    let arr2 = (-b - Math.sqrt(discriminant) ) / (2 * a);
    arr.push (arr1, arr2);
  } else if (discriminant === 0) {
    let arr3 = -b / (2 * a);
    arr.push(arr);
  }
  return arr;
}


// function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
// }