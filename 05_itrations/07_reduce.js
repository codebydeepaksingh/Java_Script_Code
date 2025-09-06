const myArray = [1,2,3];

const total = myArray.reduce((acc,currval) => {
    return acc+currval;
},0);

console.log(total);
