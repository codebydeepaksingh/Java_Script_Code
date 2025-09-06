const button = document.querySelector('#btn');

button.addEventListener("click", function(e){
    console.log(e.type);
    console.log(e.timeStamp);
    console.log(Date.now());
     
})