const whatIsAString = "bunch of characters";
whatIsAString[1] = "a";

// strings are immutable, you cannot change a part of string using the index
// Immutable data types in JS: strings, numbers, null, undefined, NaN, boolean
// Null is usually set by user, undefined by the browser

const iDeclare = null;
const IUndef = undefined;
let variable; // returns undefined

// Boolean
let positive = true;
let negative = false;

// infinity as a value exists as well

// Falsy Values
// false null undefined NaN "" 0 -0
// Truthy Values
// true, " ", any < 0 > number, [], {}

// Conditional 

if (false) {
    console.log("This runs");
}
else {
    console.log("yes");
}

console.log(Boolean("Luca"));

let myAge = 17;
if (myAge >= 18) {
    console.log("You can drink!");
}
else if (myAge === 17) {
    console.log("You can almost drink");
}
else {
    consple.log("No way jose. No drinking for you.")
}

let harryPotterHouse = "gryf";

switch(harryPotterHouse) {
    case "gryf": {
        console.log("You are one of the goodies");
        break;
    }
    case "slyth": {
        console.log("You are one of the baddies");
        break;
    }
}

// {} are not needed inside switch statements (per case) but recommended

const tadejName = "Tadej Udovic";

for (i = 0; i < tadejName.length; i++) {
    console.log(tadejName[i].toUpperCase());
}

// remember strings are immutable, you can reassign value, not adapt the value


for (i = tadejName.length - 1; i >= 0; i--) {
    if (i % 2 === 0) {
    console.log(tadejName[i].toUpperCase());
    }
    else {
    console.log(tadejName[i].toLowerCase());
    }
}

let yearOfBirth = 1989;

while (2021 - yearOfBirth !== 0) {
    console.log(`I am not ${2021 - yearOfBirth} years old`);
    yearOfBirth++;
}

do {
    console.log("Hello");
}
while(false);

// do while will run at least once

for (let letter of tadejName) {
    console.log(letter);
}

// use break to get out of loop