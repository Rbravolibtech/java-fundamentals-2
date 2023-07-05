/*======== Strict mode ========== */
/*
"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

//const interface = "Audio";

/*========  HOW TO USE FUNCTIONS ========== */
/*
function logger() {
	console.log("My name is Bravo");
}
// calling //running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
	console.log(apples, oranges);
	const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
	return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

/*========  FUNCTION DECLARATIONS VS EXPRESSIONS ========== */
/*
//function declaration

function calcAge1(birthYeah) {
	return 2037 - birthYeah;
}

const age1 = calcAge1(1991);
console.log(age1);

//Function expression
//const calcAge2 = function (birthYeah) {
//return 2037 - birthYeah;
//};
const age2 = calcAge2(1991);

console.log(age1, age2);

/*========  ARROW FUNCTIONS========== */

//const calcAge2 = function (birthYeah) {
//return 2037 - birthYeah;
//};
/*
//ARROW FUNCTION
const calcAge3 = (birthYeah) => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
	const age = 2037 - birthYeah;
	const retirement = 65 - age;
	//return retirement;
	return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Bravo"));
console.log(yearsUntilRetirement(1980, "Jonas"));

/*======== FUNCTIONS CALLING OTHER FUNCTIONS========== */
/*
function cutFruitPieces(fruit) {
	return fruit * 4;
}

function fruitProcessor(apples, oranges) {
	const applePieces = cutFruitPieces(apples);
	const orangesPieces = cutFruitPieces(oranges);

	const juice = `Juice with ${applePieces}pieces of apples and ${orangesPieces} pieces of oranges.`;
	return juice;
}

console.log(fruitProcessor(2, 3));

/*======== REVIEWING FUNCTIONS========== */
/*
const calcAge = function (birthYeah) {
	return 2037 - birthYeah;
};

const yearsUntilRetirement = function (birthYeah, firstName) {
	const age = calcAge(birthYeah);
	const retirement = 65 - age;

	if (retirement > 0) {
		console.log(`${firstName} retires in ${retirement} years`);
		return retirement;
	} else {
		console.log(`${firstName} has already retired `);
		return -1;
	}
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Bravo"));

/*======== CHALLENGE 1 ========== */
/*
Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
*/
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
console.log(calcAverage(3, 4, 5));

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
	if (avgDolphins >= 2 * avgKoalas) {
		console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
	} else if (avgKoalas >= 2 * avgDolphins) {
		console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
	} else {
		console.log("No team wins...");
	}
};

checkWinner(scoreDolphins, scoreKoalas);
*/
/*======== INTRODUCTION TO ARRAYS ========== */
/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const why = new Array(1991, 1989, 1990, 1998);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Bravo", 2037 - 1991, "teacher", friends];
console.log(jonas);

//Exercise
const calcAge = function (birthYeah) {
	return 2037 - birthYeah;
};

const years = [1990, 1991, 1989, 1998, 2000];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1])];
calcAge(years[years.length - 1]);
console.log(ages);
*/

/*======== BASIC ARRAY OPERATIONS (METHODS)========== */
