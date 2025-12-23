// ES6

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }

}


const deepak = new User("Deepak", "deepak@123", "123");

console.log(deepak.encryptPassword());
console.log(deepak.changeUsername());


// with use of prorotype


function User2(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User2.prototype.encryptPassword = function() {
    return `${this.password}abc`;
}

User2.prototype.changeUsername = function() {
    return `${this.changeUsername.toUpperCase()}`;
}

const john = new User("John", "john@123", "15236");

console.log(john.encryptPassword());
console.log(john.changeUsername());


// constructor with function

function Car(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.info = function (){
        console.log(`this car is a ${this.make} ${this.model} ${this.year}`);
        
    }
}


const newCar = new Car("Honda", "Civik", "2022");
console.log(newCar.model);
console.log(newCar.info());


// constructor with class

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`hello my name is ${this.name} and i am ${this.age} years old`);
        
    }
}

const deepak1 = new Person("Deepak singh", 30);

deepak1.greet()

