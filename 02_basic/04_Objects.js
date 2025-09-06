// SINGLETON OBJECT
const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "John Doe";
tinderUser.age = 30;
tinderUser.isLoggedIn = true;

// console.log(tinderUser);

const regularUser = {
    email: "new@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Deepak",
            lastname: "singh"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

const obj3 = { obj1, obj2 };

const obj4 = Object.assign({}, obj1, obj2);

console.log(obj4);

const spread = {...obj1, ...obj2};

console.log(spread);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("name"));

const course = {
    coursename : "javascript",
    price : 999,
    courseInstructor : "chai aur code" 
}

console.log(course.courseInstructor);

// OBJECT DE-STRUCTURE

const {coursename : courseselect} = course;
console.log(courseselect);

// JSON FORMAT

// {
//     "name" : "Deepak",
//     "age" : 25,
//     "city" : "Delhi",
//     "coursename" : "javascript"
// }

// JSON IN ARRAY

[
    {},
    {},
    {}
]