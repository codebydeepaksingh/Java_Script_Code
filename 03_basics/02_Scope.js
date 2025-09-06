// SCOPE  -> {}

// GLOBAL SCOPE

var c = 300;
let a = 500;

// BLOCK SCOPE

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;

    // console.log(a);
    // console.log(b);
    // console.log(c);
};

// console.log(a);
// console.log(b);
// console.log(c);

// NESTED SCOPE

function one(){
    const username = "Deepak";

    function two(){
        const website = "vscode";
        console.log(username);
    }

    // console.log(website);
    // two();
}

// console.log(one());
// const value = one();
// console.log(value);
one();

// NESTED SCOPE IN IF-ELSE LOOP

if (true){
    const username = "Deepak singh"
    if (username === "Deepak singh"){
        const website = " vscode"
        console.log(username + website);
        console.log(website);

    }
    // console.log(website);
    console.log(username);
}

// console.log(username);


function addone(num){
    return num + 1;
}

console.log(addone(5));


