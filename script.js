class Animal {
    constructor(name){
        this.name = name;
    }

    //variables
    meters = {
        hunger:100, //size of meters
        thirst:100,
        boredom:100
    }
    drain = {
        hunger:2, //how much the respective meter is drained per length of time
        thirst:2,
        boredom:1
    }
    
    fillMeter(meter){
        this.meters(meter)+= this.fill(meter);
    }
    drainMeter(meter){
        this.meters(meter)-= this.drain(meter);
    }
};

class Duck extends Animal{
    
    //variables
    meters = super.meters;
    drain = {
        hunger:1, //how much the respective meter is drained per length of time
        thirst:2,
        boredom:2
    }

    //functions
    fillMeter(meter){
        super.fillMeter;
    }
    drainMeter(meter){
        super.drainMeter;
    }
    /*quackSong(){ //action specific to duck animal
        this.fillMeter(boredem);
        //play animation for sing
    }*/
};

class Frog extends Animal{
    
    //variables
    meters = super.meters;
    drain = {
        hunger:2, //how much the respective meter is drained per length of time
        thirst:1,
        boredom:2
    }

    //functions
    fillMeter(meter){
        super.fillMeter;
    }
    drainMeter(meter){
        super.drainMeter;
    }
    /*skippingRope(){ //action specific to frog animal
        this.fillMeter(boredem);
        //play animation for skipping rope
    }*/
};

const petSubmit = document.getElementById('petSubmit'); //button that submits pet info in inputs (species & name)

petSubmit.addEventListener('click', submitInfo => {
});

function choosePet(petChosen, petName){
    if(petChosen == "Duck"){
        let animal = new Duck(petName);
        return animal;
    }
    else if(petChosen == "Frog"){
        let animal = new Frog(petName);
        return animal;
    }
    else{
        //nothing has been selected
    };
}