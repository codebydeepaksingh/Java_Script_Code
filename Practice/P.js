// const string = "Deepak Singh"

// for(let char of string){
//     // console.log(char);
    
// }


// const map = new Map()

// map.set("name", "Deepak");
// map.set("age", "30");

// for (let [key, value] of map){
//     // console.log(key, value)
// }


// const set = new Set([1,2,3,4,5,6])


// for(num of set){
//     // console.log(num)
// }


// const obj = {
//     name : "deepak",
//     age :30,
//     height : 1.68
// }


// for(let key in obj){
//     console.log(key,obj[key]);
// }


// const arr = [1,5,6,8,6,2,2,6,47,1,63]


// arr.forEach((e,i,v) => {
//     console.log(e,i,v);
// });

const age = [12,32,65,25,65,25]

const newAge = age.map((n)=>{
   return n%2===0;
});

// console.log(newAge);

const evenAge = age.filter((n)=>{
    return n%2===0;
});

// console.log(evenAge);


totalMember = age.reduce((acc,curr)=>{
    return curr>acc ? curr:acc;
},0)

// console.log(totalMember)