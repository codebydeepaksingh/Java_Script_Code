// //1 - VARIABLES
// const pie = 3.14;
// let number = 1546;
// var square = 2*2;

// //2- DATATYPES
// let num = 12;
// let string = "Deepak";
// let boolean = true;
// let bigInt = 154216461564215121545348712784215715;
// let value  = null;
// let name; //undefined 
// let object = {
//     name : "rohit",
//     jNumber : "45"
// }
// let Array = [1,2,3]
// let symbol = "_n"

// console.log(typeof(num));

// //3- String

// let myName = "Deepak Singh";

// console.log(myName.length);
// console.log(myName.charAt(8));
// console.log(myName.charCodeAt(0));
// console.log(myName.indexOf("S"));
// console.log(myName.slice(0,5));
// console.log(myName.split());

// //4- Number

// let x = 400;

// let y = new Number(400)


// let z = 123;

// let text = x.toString();
// console.log(typeof(text));

// //5 - Date

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getDay());


// //6 -Array

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits.length)
// console.log(fruits.toString())
// console.log(fruits[0])
// console.log(fruits.join("/"))
// console.log(fruits.pop())


// const numbers = [45, 4, 9, 16, 25];
// const numbers1 = [4, 41, 19, 1, 5];


// // const concat = numbers.concat(numbers1)
// const concat = [...numbers, ...numbers1]
// console.log(concat)

// const numArray = [1, 2, [3, 4, [5, 6]], 7];

// const newArr = numArray.flat(Infinity)
// console.log(newArr)

// const userNames = ["Deepak", "pooja", "singh", "dangi"];
// console.log(userNames);

// userNames.push("chandigarh")
// console.log(userNames);

// userNames.pop("chandigarh")
// console.log(userNames);

// userNames.unshift("mohali");
// console.log(userNames);

// userNames.shift();
// console.log(userNames);

// userNames.splice(0, 0, "haldua", "Lalitpur");
// console.log(userNames);



const numArr = [1,2,3,4,5,6]

numArr.forEach((item, index) => {
    // console.log(item, index);
    
})


numArr.map((x)=>{
    // console.log(x*2);
    
})

let myObj = {
    name : "Deepak",
    age:30,
    class : 'first'
}

// FUNCTION

const myFunction = function printMyName(){
    // console.log(`My name is Deeepak`); 
}

myFunction();

const addTwoNumbers = function addTwoNumbers(a,b){
    console.log(a+b);
}

// addTwoNumbers(5,6);

// (function one(){
//     let name = "Deepak";

//     function two() {
//             let course = "JavaScript"   
//             // console.log(name);
//             // console.log(course);

//     }
//     two();
// })();


let name = "john";

if (name == "Deepak") {
    // console.log(`my name is ${name}`)
}
else{
    // console.log("my name is Pooja")
}


let value = 20;

if (value = 20){
    var power = "run"
    // console.log(`he can : ${power}`);
}

    // console.log(`he can : ${power}`);



// let qualifications = "12th"
// let age = 15

// if (qualifications == "12th" && age =="17" ) {
//     console.log(`he can play Ranji Trophy`);
// }
// else{
//     console.log(`he cannot play Ranji Trophy`);
// }

// if (qualifications || "12th" || age =="17" ) {
//     console.log(`he can play Ranji Trophy`);
// }
// else{
//     console.log(`he cannot play Ranji Trophy`);
// }


const day = "Tuesday";

// switch (day) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("March");
//         break;

//     default:
//         console.log("not macthed");
//         break;
// }

const userEmail = [];
// if (userEmail) {
//     console.log("got the email");
    
// } else {
//     console.log("dont have email");
    
// }


for (let i = 0; i <= 10; i++) {
    // console.log("Outer loop", i)

    for (let j = 0; j <= 10; j++) {
        // console.log("inner loop", j)
        // console.log(`${i} * ${j} : ${i*j}`)
        
    }
}


// let myArray  = ["spiderman", "superman", "ironman", "thor", "hulk"];

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];

//     console.log(element)
// }


// for (let index = 0; index < 100; index++) {
//     console.log(`value of index is,  ${index}`);

//     if (index==5) {
//         console.log("break the loop");
//         // break;
//         continue;
//     }
    
// }


let i = 0;

while (i <= 10) {
        // console.log(`value of i is ${i}`);
        i = i+1;  
}

let num = 10;

do {
    // console.log(`num is : ${num}`)
} while (num <= 25);


// FOR OF LOOP

const arr = [1,2,3,4,5,6,7,8,9,1,2,5,7]

for (const num of arr) {
    console.log(num)
}


const string = "Deepak Singh"

for(let char of string){
    console.log(char);
    
}











