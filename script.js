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
/*
const friends = ["Michael", "Steven", "Peter"];

//Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

//Remove elements
friends.pop(); //last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Peter")) {
	console.log("You have a friend called Steven");
}
 */
/*======== CHALLENGE 2 ========== */
/*
Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.
*/
/*
const calcTip = function (bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
	bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);
*/

/*======== INTRODUCTION TO OBJECTS ========== */
/*
const jonasArray = [
    'Jonas',
    'Bravo',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
	firstName: "Jonas",
	lastName: "Bravo",
	age: 2037 - 1991,
    job: 'teacher',
	friends: ['Michael', 'Peter', 'Steven']
};
*/

/*======== DOT VS BRACKET NOTATION ========== */
/*
const jonas = {
	firstName: "Jonas",
	lastName: "Bravo",
	age: 2037 - 1991,
	job: "teacher",
	friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
	"What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends",
);
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
	console.log(jonas[interestedIn]);
} else {
	console.log(
		"Wrong request! Choose between firstName, lastName, age, job, and friends",
	);
}

jonas.location = "portugal";
jonas["twitter"] = "@jonasbravo";
console.log(jonas);

//challenge
// 'jonas has 3 friends, and his best friend is called Michael
console.log(
	`${jonas.firstName} has ${jonas.friends.length}, friend, and his best friend is called ${jonas.friends[0]}`,
);
*/
/*======== OBJECT METHODS ========== */
/*
const jonas = {
	firstName: "Jonas",
	lastName: "Bravo",
	age: 2037 - 1991,
	job: "teacher",
	friends: ["Michael", "Peter", "Steven"],
	hasDriversLicense: true,

	//calcAge: function (birthYeah) {
	//return 2037 - birthYeah;
	//},
	//};

	calcAge: function () {
		console.log(this);
		return 2037 - this.birthYeah;
	},
	getSummery: function () {
		return `${this.firstName} is a ${this.calcAge()} year old ${
			jonas.job
		}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
	},
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
//console.log(jonas["calcAge"](1991));

// challenge
// Jonas is a 46-year old teacher, and he has a drivers license

console.log(jonas.getSummery());
*/

/*======== CHALLENGE 3 ========== */
/*
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
*/
/*
const mark = {
	fullName: "Mark Miller",
	mass: 78,
	height: 1.69,
	calcBMI: function () {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	},
};

const john = {
	fullName: "John Smith",
	mass: 92,
	height: 1.95,
	calcBMI: function () {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	},
};

mark.calcBMI();
john.calcBMI();
//John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

if (mark.bmi > john.bmi) {
	console.log(
		`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`,
	);
} else if (john.bmi > mark.bmi) {
	console.log(
		`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`,
	);
}
*/
/*======== ITERATION: THE FOR LOOP ========== */

// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");

// for loop keeps running while condition is TRUE
//for (let rep = 1; rep <= 9; rep++) {
//console.log(`Lifting weights repetition ${rep}`);
//}

/*======== LOOPING ARRAYS, BREAKING AND CONTINUING ========== */
/*
const jonas = [
	"Jonas",
	"Bravo",
	2037 - 1991,
	"teacher",
	["Michael", "peter", "Steven"],
];
const types = [];

for (let i = 0; i < jonas.length; i++) {
	console.log(jonas[i], typeof jonas[i]);
	//filling types array
	//types[i] = typeof jonas[i];
	types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 1994, 1989, 1998];
const ages = [];

for (let i = 0; i < years.length; i++) {
	ages.push(2037 - years[i]);
}
console.log(ages);
*/
/*======== LOOPING ARRAYS, BREAKING AND CONTINUING ========== */
