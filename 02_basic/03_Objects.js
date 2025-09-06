// SINGLETON PATTERN

// OBJECT LITERALS

let mySym = Symbol("myKey1");

const user = {
    fullName : "Deepak Singh",
    [mySym] : "myKey1",
    age : 25,
    address : "Nainital",
    isLogged : true,
    email : "deepak@google.com",
}

console.log(user.address);
console.log(user["address"]);
console.log(typeof user[mySym]);

user.address = "deepak@chatgpt";

console.log(user);

user.greeting = function (){
    console.log("hello deepak");
}

console.log(user.greeting());


