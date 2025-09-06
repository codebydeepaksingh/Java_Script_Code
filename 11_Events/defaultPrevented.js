const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const p = document.querySelector('p')

h1.addEventListener('click', function(e){
    console.log("h1 clicked");
    
})
h2.addEventListener('click', function(e){
    console.log("h2 clicked");
    
})


p.addEventListener('click', function(e){
    e.stopImmediatePropagation();
    console.log("p clicked");
    
})


const a = document.querySelector("a")

a.addEventListener('click', function(e){
    e.preventDefault()
    console.log("a is clicked");
    
})