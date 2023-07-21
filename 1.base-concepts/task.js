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

function setNumber() {
  const a = parseFloat(prompt("Введите коэффициент a: "));
  const b = parseFloat(prompt("Введите коэффициент b: "));
  const c = parseFloat(prompt("Введите коэффициент c: "));

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Ошибка: введите корректное число");
  }

  let arr = solutionResult(a, b, c);

  if (arr.length === 0) {
    console.log("Нет корней");
  } else if (arr.length === 1) {
    console.log(`Имеет один корень: х = ${arr[0]}`);
  } else if (arr.length === 2) {
    console.log(`Имеет два корня: х1 = ${arr[0]}, x2 = ${arr[1]}`);
  }
}
// function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
// }