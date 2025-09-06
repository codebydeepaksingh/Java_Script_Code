// begin from jan 1st 1970

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

// let createDate = new Date("2025-01-17");
let createDate = new Date("01-15-2025");
console.log(createDate);

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(createDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMilliseconds());
console.log(newDate.getDay());

console.log(`${newDate.getDay()}`);

newDate.toLocaleString('default',{
    weekday: 'long',
    timeZone : 'UTC',
})

