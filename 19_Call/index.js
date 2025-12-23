function SetUsername(username) {
    this.username = username;
}

function createUser(username, email, password) {
    SetUsername.call(this, username);
    this.email = email;
    this.password = password;
}

let chai = new createUser("Deepak", "Deepak@gmail.com", 123);

console.log(chai);



function details (username, userId, userEmail) {
    
        this.username = username
        this.userId = userId
        this.userEmail = userEmail
}
    

function showDetails() {
        console.log(`please find the user detail - > Username : ${this.username}, Userid : ${this.userId}, Useremail : ${this.userEmail} `);
    }


const user = new details("Deepak", 1007, "d@gmail.com");
const user1 = new details(["Pooja", 1526, "p@gmail.com"]);

showDetails.call(user);
showDetails.apply(user1);




// apply method 


function drink(type, place){
    console.log(`this is the ${type} cofee and it is famous in ${place}`);
    
}

drink.apply(null, ["black cofee", "Nainital"]);



// new 

function Name (firstname,lastname){

    this.firstname = firstname;3
    this.lastname = lastname;
}


function setFullname(){
    console.log(`my name is ${this.firstname} ${this.lastname}`);  
}

const N = new Name("Deepak", "singh");

setFullname.call(N)

