// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
function chai(){
    console.log("hi my name is deepak");
};

chai();


(function cofee(){
    console.log("hi my name is pooja");
})();

const myFunc = () => {
    console.log("hi i am here where are you");
}

myFunc();

(() => {
    console.log("yes i am here ")
})();