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

const petSubmit = document.getElementById('petSubmit'); //button that submits pet info in inputs (species & name). id name to be changed later maybe
let petType = document.getElementById('petType'); //input for pet type. frog duck rock. just frog duck for me though. id name to be changed later maybe
let petName = document.getElementById('petName'); //input for pet name. will be a text input probably. id name to be changed later maybe
let warning = document.getElementById('warning'); //p tag that will warn u if you are missing values in your input. e.g. "please enter a name". will be hidden initially but have its value changes and be shown using js


petSubmit.addEventListener('click', submitInfo => {
    let messedUp = false;
    warning.style.visibility = hidden;
    warning.textContent = "";
    if(petType.value != "Duck" || petType.value != "Frog"){ //if u didnt select an animal
        warning.textContent = "Please select a type of pet (duck or frog)";
        warning.style.visibility = visible;
        messedUp = true;
    }
    if(petName.value.length < 1){ //if ur name is less than 1 character
        warning.textContent = "Please enter a name for your pet";
        warning.style.visibility = visible;
        messedUp = true;
    }

    if(!messedUp){ // if you have both a pet type clicked AND more than 1 character written in the name box
        choosePet(petType.value, petName.value);
    }
});

function choosePet(species, name){
    if(species == "Duck"){
        let animal = new Duck(name);
        return animal;
    }
    else if(species == "Frog"){
        let animal = new Frog(name);
        return animal;
    }
    else{
        //nothing has been selected
    };
}