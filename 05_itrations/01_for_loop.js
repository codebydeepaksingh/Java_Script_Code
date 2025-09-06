for (let index = 0; index <= 10; index++) {
    const element = index;
    // console.log(element);
    // console.log("Deepak");
    
}


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loo, ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop, ${j}`);
        // console.log(`${i} * ${j} : ${i*j}`);   
    }
    
}

let myArray  = ["spiderman", "superman", "ironman", "thor", "hulk"];

console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}


// BREAK AND CONTINUE

// BREAK CONDITION 

// for (let index = 1; index <=100; index++) {

//     if (index == 5) {
//         console.log(`5 value detected please break the loop`);
//         break
        
//     }
//     console.log(`value of index is,  ${index}`);
    
// }

// CONTINUE CONDITION

for (let index = 1; index <=100; index++) {

    if (index == 5) {
        console.log(`5 value detected please break the loop`);
        continue
        
    }
    console.log(`value of index is,  ${index}`);
}




