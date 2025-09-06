// attachEvent()
// jQuery - on

// MUST READ
// type, timestamp, defaultPrevented
// target, toElelment, srcElement, currentTarget
// clientX, clientY, screenX, screentY
// altkey, ctrlkey, shiftkey, keyCode - pending

/*const owlImage = document.querySelector('#owl');
console.log(owlImage);

owlImage.addEventListener('click',function(e) {
    // alert("owl clicked again")
    // console.log(e);
    console.log("owl clicked");

    // EVENT PROPAGATION 
    e.stopPropagation()
    
}, false)

const images = document.querySelector('#images')

images.addEventListener('click', function(e){
    console.log("clicked inside the ul");
    
}, false)


const googleId = document.querySelector("#google")

googleId.addEventListener('click', function(e){
    e.preventDefault()
    e.stopPropagation()
    console.log("google clicked");
    
}, false)*/

const ul = document.querySelector("#images");

ul.addEventListener('click', function (e) {
    // console.log(e.target.parentNode);
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG') {
        let removeIt = e.target.parentNode
        removeIt.remove();
    }
}, false)
