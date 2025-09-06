// const coding = ['js', 'ruby', 'java', 'python', 'cpp'];

// const values = coding.
// forEach((item) => {
//         console.log(item);
               
// });

// console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter((num)=>{
//     return num > 5;
// })


const newNums = myNums.map((num) => {
    return num %2===0;
} )
console.log(newNums);



const myNums2 = [1,2,3,4,5,6,7,8,9,10];

const newArray = []

myNums2.forEach((num) => {
    if(num > 5){
        newArray.push(num)
    }
} )
console.log(newArray);


const people = [
  {
    id: 1,
    name: "Deepak Singh",
    age: 25,
    email: "deepak.singh@example.com",
    city: "New Delhi",
    isEmployed: true
  },
  {
    id: 2,
    name: "Ananya Sharma",
    age: 28,
    email: "ananya.sharma@example.com",
    city: "Mumbai",
    isEmployed: false
  },
  {
    id: 3,
    name: "Rohit Mehta",
    age: 32,
    email: "rohit.mehta@example.com",
    city: "Bangalore",
    isEmployed: true
  },
  {
    id: 4,
    name: "Priya Verma",
    age: 22,
    email: "priya.verma@example.com",
    city: "Pune",
    isEmployed: false
  },
  {
    id: 5,
    name: "Arjun Patel",
    age: 30,
    email: "arjun.patel@example.com",
    city: "Ahmedabad",
    isEmployed: true
  }
];

const isEmp = people.filter((p) => {
     return p.isEmployed === true && p.city==="New Delhi";
} )

console.log(isEmp);




