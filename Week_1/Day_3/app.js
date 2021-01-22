// functions and arrays
// three parts of a function:
// function key word
// function arguments, parameters
// function body

function sayHi() {
    console.log("Hi");
}

sayHi();


function canDrink(age) {
    if (typeof age !== "number") {
        return;
    }
    if (age >= 18) {
        console.log("You can drink.");
    }
    else if (age === 17) {
        console.log("Almost.");
    }
    else {
        console.log("Gandaly yells: 'You shall not drink!'");
    }
}

canDrink(31);

// return returns the value in a function, but also exits it

function haveYouMet(winged, person) {
    console.log(`Hello ${person}, have you met ${winged}?`)
}

haveYouMet("Ted", "Lisa");

const log = console.log;
log("Hello world!");

const shoppingList = ["yoghurt", "granola", "berries"];
log(shoppingList);

// everything is an object in JS
// data types with primitive values are immutable, they are exactly this or something else
// data types with non-primitive values are mutable


// add to end
shoppingList.push("ice-tea");
// add to beginning
shoppingList.unshift("ice-tea");

// remove from the end
shoppingList.pop("ice-tea");
// remove from the beginning
shoppingList.shift("ice-tea");


// splice(start, delete, replace)
const arr = [1,2,3,4,5,6,7,8,9,10]
arr.splice(0, 0, 0);

//  function forEach(arr, callBackFunction) {
//    for (let = 0; i < arr.length; i++) {
//        callBackFunction(arr[i], i, arr);
//    }
// }

let sumOfCart = 0;
arr.forEach( function(element, index, array) {
    sumOfCart += element;
    console.log("Index is: " + index)
    console.log(array);
}
)
log(sumOfCart);

// learn more about forEach (array method)





