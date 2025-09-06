const myArr = [0,1,2,3,4,5,6];

// console.log(myArr[4]);


// Arroy create a shallow copy

const myHeroes = ["ironman", "captian america", "hulk", "black widow", "thor"];
// console.log(myHeroes)
const array = new Array(1,1,2,5,5,69,5);
// console.log(array);

// ARRAY METHODS
let deepak = [1,5,6,8,54,6,5,58,5];

console.log(deepak);

// add item at the end of the array
console.log(deepak.push(88));
console.log(deepak);

// remove item from the end of the array
console.log(deepak.pop(88));
console.log(deepak);

let newDeepak = console.log(deepak.slice(2,5));

// add item on starting of an array

deepak.unshift(55);
console.log(deepak);

// remove item from starting of an array

deepak.shift();
console.log(deepak);

console.log(deepak.includes(9));

// print array as a string

const newArr = deepak.join();

console.log(newArr);
console.log(typeof newArr);

// slice, splice

console.log("A", deepak);

const deepak1 = deepak.slice(1,3);

console.log("B", deepak1);

const deepak3 = deepak.splice(1,3);
console.log("C", deepak3);









