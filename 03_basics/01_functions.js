function sayMyName(){
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
    console.log("A");
    console.log("K");
}

// sayMyName();

// FUNCTION OF ADDNING TWO NUMBERS

function addTwoNumbers (num1, num2){
    console.log(num1 + num2);
}

// const res = addTwoNumbers(5,8);
// console.log(res);

// FUNCTION OF ADDING THREE NUMBERS
function addThreeNumbers(a, b, c){
    return a + b + c;
}

const res2 = addThreeNumbers(1,2,3);
console.log(`Result of adding three numbers is: ${res2}`);
console.log(typeof res2);


// NEW FUNCTION

function loginUserMessage(username){
    return `Welcome, ${username}!`;
}

console.log(loginUserMessage("Deepak"));
console.log(loginUserMessage());

function calcalateCartPrice(val1,val2, ...num1){
    return num1;
}


console.log(calcalateCartPrice(100,200,300,400,2000));

const user = {
    username : "Deepak",
    age : 30
}

// handleObject ( {
//     username : "Pooja",
//     age : 30
// })

function handleObject (anyobject){
    console.log(`Username is ${anyobject.username} age is ${anyobject.age}`);
}

handleObject(user);