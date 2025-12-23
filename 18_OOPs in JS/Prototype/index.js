// let myName = "Deepak";


// console.log(myName.length);



let myHeroes = ["thor", "ironman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function (){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.deepak = function (){
    console.log(`Deepak is present in all objects`);
    
}

heroPower.deepak();

Array.prototype.pooja = function(){
    console.log(`pooja is present in all Array`);

}

myHeroes.pooja();
myHeroes.deepak();



//INHERITANCE


