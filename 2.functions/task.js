function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	let avg = 0;

	for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
	}
	avg = Number(sum / arr.length).toFixed(2)

	return {
		min: min,
		max: max,
		avg: Number(avg)
	};
}

function summElementsWorker(...arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let difference = 0;
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i]
    }
    difference = max - min;
  }
  return difference;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let differense = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement = sumEvenElement + arr[i];
    }
    if (arr[i] % 2 !== 0) {
      sumOddElement = sumOddElement + arr[i];
    }
    differense = sumEvenElement - sumOddElement;
  }
  return differense;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement = sumEvenElement + arr[i];
      countEvenElement++;
    }
    avg = sumEvenElement / countEvenElement;
  }
  return avg;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let numbers;
  let result;

  if (arrOfArr.length === 0) return 0;

  for(i = 0; i < arrOfArr.length; i++){
    numbers = arrOfArr[i];
    result = func(...numbers);
    if(result > maxWorkerResult) maxWorkerResult = result;
  }
  return maxWorkerResult;
}
