// DATA TYPES IN JS

"use strict";// treat all JS code as newer version

let name = "Deepak";
let age = 25;
let isMarried = true;

// number => 2 ki power 53
// string => "collection of characters"
// boolean => true or false
// bigint => 2 ki power 64
// null => stand alone value
// undefined => variable declared but not assigned any value
// object => collection of key value pairs
// array => collection of values
// symbol => unique value

// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof name);

// DATATYPE CONVERSION IN JS

let score = 33;
let match = "22"

// console.log(typeof score);
// console.log(typeof match);

// CONVERTING A STRING TO NUMBER

let valueInNumber = Number(match);
// console.log(typeof valueInNumber);

// "330" => 330
// "33abc" => NaN (Not a Number)
// true => 1, false => 0
// null => 0, undefined => NaN
// "33.33" => 33.33

// CONVERTING A NUMBER TO BOOLEAN

let isLoggedIn = 0;

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true, 0 => false
// "" => false
// "deepak" => true

// CONVERTING NUMBER TO STRING

let somenum = 33;
let stringNumber = String(somenum);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *****OPERATIONS*****

let value = 3;

let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2/2);
// console.log(2%2);
// console.log(2**2);

let str1 = "Deepak";
let str2 = "singh";

let str3 = str1+ " " + str2;

// console.log(str3);

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+2);
// console.log(1+2+"2");
// console.log(1+"2"+"2");
// console.log((3+4)*5%3);

// console.log(+true);
// console.log(true+);
// console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2+2;


let gameCounter = 100
gameCounter++;
// console.log(gameCounter);
++gameCounter;
// console.log(gameCounter);

let x = 2;
let y = ++x;

// console.log(`value of x is ${x}, value of y is ${y}`);




