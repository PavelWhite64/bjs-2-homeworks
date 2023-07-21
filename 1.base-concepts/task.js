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
	let per = parseInt(percent);
	let con = parseInt(contribution);
	let amo = parseInt(amount);
	if (isNaN(percent) || percent < 0) {
		return 'fasle';
	} else {
		let s = amo - con;
		let n = countMonths;
		let pay = s * (per + (per / (((1 + per) ** n) - 1)));
		let totalAmount = (pay * n).toFixed(2);
		console.log(totalAmount);
		return +totalAmount;
	}
}
