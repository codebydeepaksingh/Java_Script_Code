// PRIMITIVE DATA TYPES
// 7 TYPES
// String - string
// Number - number
// Boolean - boolean
// null - typeof - object
// undefined - undefined 
// Symbol - function
// BigInt - function

console.log(typeof BigInt);

const score = 100;
const scoreValue = 100.3;
const isHighScore = true;
const outSideTemp = null;
const userEmail = undefined;

const id = Symbol("12345");
const newId = Symbol("12345");
console.log(id===newId);

const bigNUmber = 100n;
console.log(typeof bigNUmber)


// REFERENCE/NON PRIMITIVE DATA TYPES

// OBJECTS - function
// ARRAYS - function
// FUNCTIONS - Object Function

const heroes = ["Iron Man", "Captain America", "Thor"];
const hero = {
    name: "Iron Man", 
    age: 40 
};

const myFunction = function (){
    console.log("Hello World");
}

myFunction();
console.log(typeof myFunction);

console.log(typeof Symbol);


// ********************************************************

// Stack memory - Primitive 
// Heap memory - Reference/non primitive data types

let myYoutubeName = "deepak@gmail.com";
let anotherName = myYoutubeName;

anotherName = "another@gmail.com";

console.log(myYoutubeName);
console.log(anotherName);


let userOne = {
    name : "deepak",
    age : 30,
};

let userTwo = userOne;

userTwo.age = 28;

console.log(userOne.age);
console.log(userTwo.age);


