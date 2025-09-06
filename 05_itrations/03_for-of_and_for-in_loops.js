// FOR OF LOOP
const arr = [1,2,3,4,5,6];

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "hi sir/mam";

for (const greet of greetings) {
    // console.log(greet);
    
}

// MAPS

const map = new Map()

map.set('In', 'India');
map.set('USA', 'United States of America');
map.set('Fr', 'France');

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":",  value);  
}


// FOR IN LOOP

const object = {
    js : "javascript",
    cpp: "c++",
    rb : "ruby",
    swift : "swift"
}

for (const key in object) {
    console.log(object[key]);
    
}