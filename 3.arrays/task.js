function compareArrays(arr1, arr2) {
	return ((arr1.length === arr2.length) && arr1.every((elem, i) => elem === arr2[i]));
}

function getUsersNamesInAgeRange(users, gender) {
	let result = users.filter(user => user.gender === gender).map(old => old.age).reduce((acc, old, i, arr) => {
		acc += old;
		if (i === arr.length - 1) {
			return acc / arr.length;
		}
		return acc;
	}, 0);
	return result;
}