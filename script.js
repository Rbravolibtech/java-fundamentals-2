/*======== Strict mode ========== */

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
