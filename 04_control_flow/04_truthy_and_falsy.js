const userEmail = [];
if (userEmail) {
    console.log("got the email");
    
} else {
    console.log("dont have email");
    
}

// FALSY VALUES
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// TRUTHY VALUES
// "0", "false", " ", [], {}, function(){}


// if (userEmail.length === 0) {
//     console.log("Array is empty");
    
// }

const emptyObj = {};

if (Object.values(emptyObj).length === 0) {
    console.log("Object is empty");
}

// NULLISH COALESCING OPERATOR (??) : NULL UNDEFINED

let val1;

// val1 = 5 ?? 20;

// val1 = 0 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 20;
val1 = null ?? undefined ?? 10

console.log(val1);
