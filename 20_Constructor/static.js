class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username : ${this.username}`);
        
    }

    static createId(){
        return `1230`;
    }
}

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const realme = new Teacher("P1", "p1@gmail.com")

console.log(realme);

realme.logMe()
// console.log(realme.createId());


// new static method

class MyClass{

    myMethod(){
        console.log("this is my instance method");
        
    }

    static myStaticMethod(){
        console.log("this is my static method");
        
    }
}


const m = new MyClass()

console.log(m.myMethod());
console.log(m.myStaticMethod());

