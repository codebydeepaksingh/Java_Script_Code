// EXAMPLE 1

// class Animals {
//     constructor(name) {
//         this.name = name;
//     }

//     eats() {

//         console.log(`${this.name} eats food`);

//     }

// }


// class Lion extends Animals {

//     eats() {
//         super.eats();
//         console.log(`${this.name} eats meat`);

//     }
// }


// let shera = new Lion("Shera");

// shera.eats();

// EXAMPLE 2

class Animal {
    constructor(name){
        this.name = name;
    }
    speak(){
    console.log('animals can speak');
    }
}

class Dog extends Animal{
    
    speak(){
        super.speak();
        console.log(this.name + " can  barks");
        
    }
}

class Cat extends Animal{
    speak(){
        super.speak();
        console.log(this.name + " can meaw");
        
    }
}

let tommy = new Dog("Tommy");

// tommy.speak();

let zenny = new Cat("Zenny");

// zenny.speak();

// let animals = [new Dog(), new Cat(), new Animal()];

// animals.forEach(function (name) {
//     name.speak();
// });


// EXAMPLE 3 

class Player {
    constructor(name){
        this.name = name;
    }

    field(){
        console.log(`${this.name} can field in anywhere`);
    }
}

class Jadeja extends Player {
    field(){
        super.field();
        console.log(`${this.name} can field in point specially`);
    }
}

class Rohit extends Player {
    field(){
        console.log(`${this.name} can field in sleep specially`);
    }
}

class Virat extends Player {
    field(){
        console.log(`${this.name} can field in mid-on specially`);
    }
}


let jadeja = new Jadeja("Jadeja");
jadeja.field();







