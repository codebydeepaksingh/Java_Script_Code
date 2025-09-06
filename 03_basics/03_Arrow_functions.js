const user = {
    username : "Deepak",
    age : 30,
    isLogged : function(){
        console.log(`${this.username}, , welcome`);
        // console.log(this);
        
    }
}

// user.isLogged();
// user.username = "john";
// user.isLogged();
// console.log(this);

function chai(){
    console.log(this);
}
chai();

// ARROW FUNCTION

// () => {}

    const addTwoNum = (a,b) => {
        return a + b;
    }

    console.log(addTwoNum(3, 5));


    // IMPLICIT RETURN 
    const mulTwoNum = (num1,num2) =>  num1 * num2;
    console.log(mulTwoNum(5, 5));

    
