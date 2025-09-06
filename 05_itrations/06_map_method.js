const myArray = [1,2,3,4,5,6,7,8,9,10];

const newArray = myArray.map( (num) => {
    return num*2;
} )

console.log(newArray);


const users = [
  { name: "Deepak", age: 25 },
  { name: "Ravi", age: 30 },
  { name: "Priya", age: 28 }
];

const names = users.map( (user) => {
    return user.age && user.name;
} )

console.log(names);


const numWithIndex = myArray.map( (num,index) => {
    return num,index;
} )

console.log(numWithIndex);

const score = [10,20,30,40,50,60,70,80,90,100];

const updatedScore = score
                            .map((num) => num / 10)
                            .map((num) => num*num)
                            .filter((num) => num>10);


                            console.log(updatedScore);
                            

