const buttons = document.querySelectorAll('.button');
console.log(buttons);

// const body = document.querySelector('body');
// console.log(body);

// buttons.forEach(function(button){
//     console.log(button);
// button.addEventListener('click',function(event){
//     console.log(event);
//     console.log(event.target); 
//     if (event.target.id === "grey"){
//         body.style.backgroundColor = "grey";
//     }
//     else if(event.target.id === "white"){
//         body.style.backgroundColor = "white";
//     }
//     else if(event.target.id === "blue"){
//         body.style.backgroundColor = "blue";
//     }
//     else {
//         body.style.backgroundColor = "yellow";
//     }
// }); 
// });

// code with switch statement
const body = document.querySelector("body");

document.addEventListener("click", function(event) {
    switch (event.target.id) {
        case "grey":
            body.style.backgroundColor = "grey";
            break;
        case "white":
            body.style.backgroundColor = "white";
            break;
        case "blue":
            body.style.backgroundColor = "blue";
            break;
        default:
            body.style.backgroundColor = "yellow";
            break;
    }
});


