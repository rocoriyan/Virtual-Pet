let myPet = null;

class Animal {
    constructor(name){
        this.name = name;
    }

    //variables
    species = "Duck"; //never used, but if this class is somehow selected then duck images will be used
    stage = 0; //evolution. starts at 0 becomes 1
    meters = {
        health:100,
        hunger:100, //size of meters
        thirst:100,
        boredom:100
    }
    drain = {
        health:0, //only goes down when other meters are low? maybe?
        hunger:2, //how much the respective meter is drained per length of time
        thirst:2,
        boredom:1
    }


    //functions
    changeImg(){
        mood = this.checkMood();
        petImage.src=`img/${this.species}${this.stage}_${mood}.gif`;
    }

    checkMood(){
        while(checkingSadness){
            let happiness = 0;
            let mood = 1; //neutral
            for(let x = 0; x<4;x++){
                if(this.meters[x]<30){
                    sadness = 0; //sad
                    checkingSadness = false;
                }
            }
            for(let x = 0; x<4;x++){
                if(this.meters[x]>80){
                    happiness++;
                }
            }
            if(happiness>3){ //if more than 3 bars are above 80% get happy
                mood = 2; //happy
            }
            checkingSadness = false;
        }
        return mood;
    }

    drinkWater(){
        fillMeter(thirst, 20);
    }
    
    eatFood(){
        fillMeter(hunger, 20);
        fillMeter(thirst, 10); //eating will make you a little less thirsty, as food contains water
    }

    play(){
        this.fillMeter(boredom, 20);
        this.drainMeter(thirst, 5);
        this.drainMeter(hunger, 5); //playing is fun but will make you hungrier and thirstier
    }
    
    fillMeter(meter, fill){
        this.meters(meter)+= fill;
    }

    drainMeter(meter, drain){
        this.meters(meter)-= drain;
    }
};

class Duck extends Animal{
    
    //variables
    species = "Duck";
    stage = super.stage;
    meters = super.meters;
    drain = {
        health:0,
        hunger:1, //how much the respective meter is drained per length of time
        thirst:2,
        boredom:2
    }

    //functions

    drinkWater(){
        super.drinkWater;
    }
    
    eatFood(){
        super.eatFood;
    }

    play(){
        super.play;
    }

    fillMeter(meter){
        super.fillMeter;
    }

    drainMeter(meter){
        super.drainMeter;
    }
};

class Frog extends Animal{
    
    //variables
    species = "Frog";
    stage = super.stage;
    meters = super.meters;
    drain = {
        health:0,
        hunger:2, //how much the respective meter is drained per length of time
        thirst:1,
        boredom:2
    }

    //functions

    eatFly(){
        fillMeter(hunger, 15);
        fillMeter(boredom, 15); //eating a fly is fun but less filling
    }

    drinkWater(){
        super.drinkWater;
    }
    
    eatFood(){
        super.eatFood;
    }

    play(){
        super.play;
    }
    
    fillMeter(meter){
        super.fillMeter;
    }

    drainMeter(meter){
        super.drainMeter;
    }
};

const petSubmit = document.getElementById('petSubmit'); //button that submits pet info in inputs (species & name). id name to be changed later maybe
const petImage = document.getElementById('pet'); //img that plays pet animation
let petType = document.getElementById('petType'); //input for pet type. frog duck rock. just frog duck for me though. id name to be changed later maybe
let petName = document.getElementById('petName'); //input for pet name. will be a text input probably. id name to be changed later maybe
let warning = document.getElementById('warning'); //p tag that will warn u if you are missing values in your input. e.g. "please enter a name". will be hidden initially but have its value changes and be shown using js
let healthBar = document.getElementById('health');
let hungerBar = document.getElementById('hunger');
let thirstBar = document.getElementById('thirst');
let boredomBar = document.getElementById('boredom');

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
        myPet = choosePet(petType.value, petName.value);
        //
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

//only really used for testing. feel free to ignore
function updateBars(){
    healthBar.textContent = `Health: ${myPet.meters(health)}`;
    hungerBar.textContent = `Hunger: ${myPet.meters(hunger)}`;
    thirstBar.textContent = `Thirst: ${myPet.meters(thirst)}`;
    boredomBar.textContent = `Boredom: ${myPet.meters(boredom)}`;
}