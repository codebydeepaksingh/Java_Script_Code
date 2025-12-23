// EXAMPLE 1

class Animal {
    speak() {
        console.log("Animal can speak");

    }
}


class cat extends Animal {
    meaw(name) {
        this.name = name;
        console.log(`${this.name} cat can meaw`);

    }
}

class dog extends Animal {
    bark(name) {
         this.name = name;
        console.log(`${this.name} dog bark`);

    }
}


let kali = new cat();

// kali.speak();
// kali.meaw("Kali");

let tommy = new dog();

// tommy.bark("Tommy")
// tommy.speak()


// EXAMPLE 2

class vehicle {

    move() {
        console.log("car can move");

    }
}

class car extends vehicle {
    speed() {
        console.log("can run with high speed");

    }
}


let skoda = new car();

// skoda.move();
// skoda.speed();


// Example 3

class person {
    
    talk(){
        console.log("Person can talk and walk");      
    }
}

class man extends person {

    swing(){
        console.log("man can swing also");
        
    }
}


const deepak = new man();

// deepak.swing();
// deepak.talk();


// Example 4

class dad {
    work(name){
        this.name = name;
        console.log(`${this.name} can do some work`);
        
    }
}

class boy extends dad {
    play(name){
        this.name = name;
        console.log(`${this.name} can play cricket`);
        
    }
}

class girl extends boy {
    food (name){
        this.name = name;
        console.log(`${this.name} can make food`);
        
    }
}


let pooja = new girl();

// pooja.work("Pooja");
// pooja.work("pooja");
// pooja.work("pooja");


// EXAMPLE 5


class Car {
    constructor(name) {
        this.name = name;
    }

    startEngine(){
        console.log("Engine started");
        
    }

    stopEngine(){
        console.log("Engine stopped");
        
    }
}


class Toyota extends Car {

    carname(name){
        console.log(`${this.name} has the best speed`);
        
    }
}

let fortuner = new Toyota("Fortuner");

// fortuner.startEngine();
// fortuner.carname();
// fortuner.stopEngine();



class Player {

    constructor(name){
        this.name = name;
    }

    canField(){
        console.log(`${this.name} can field`);
        
    }
}


class Batter extends Player {

    Batter(){
       console.log(`${this.name} can bat`);
        
    }
}

class Bowler extends Batter {
    Bowl(){
        console.log(`${this.name} can bowl`);
    }
}

class fielder extends Bowler {
    field(){
        console.log(`${this.name} can field`);
    }
}


let Deepak = new fielder("Deepak");

Deepak.canField();
Deepak.Batter();
Deepak.Bowl();
Deepak.field();

// new example

class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`${this.username} is logged`);
        
    }
}

class Teacher extends User {
    constructor(username, password, email){
        super(username);
        this.email = email;
        this.password = password;
    }

    newClass(){
        console.log(`new class added by ${this.username}`);
        
    }
}

const sita = new Teacher("Sita", "15263", "sita@google.com");

console.log(sita);
sita.logMe();
sita.newClass()







