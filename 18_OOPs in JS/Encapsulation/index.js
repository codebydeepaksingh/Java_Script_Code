class Player {
    constructor(name,id,run){
        this.name = name;
        this.id = id;
        this.run = run;
    }

    getName (){
        return this.name;
    }

    getId (){
        return this.id;
    }

    getRun (){
        return this.run;
    }
}

let p1 = new Player("Deepak", 123456, 15265);

console.log(p1.getId());
  
