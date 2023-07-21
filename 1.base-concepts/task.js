"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let d = (b ** 2 - 4 * a * c);
	if (d > 0) {
		let root1 = (-b + Math.sqrt(d)) / (2 * a);
		let root2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(root1, root2);
		return arr;
	}

	if (d === 0) {
		let root0 = -b / (2 * a);
		arr.push(root0);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let percent = parseInt(percent);
	let contribution = parseInt(contribution);
	let amount = parseInt(amount);
	if (isNaN(percent) || percent < 0) {
		return 'fasle';
	} else {
		let s = contribution - amount;
		let n = countMonths;
		let pay = s * (percent + (percent / (((1 + percent) ** n) - 1)));
		let totalAmount = (pay * n).toFixed(2);
		return +totalAmount
	}
}
