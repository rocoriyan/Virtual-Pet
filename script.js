class Animal {
    constructor(name, species){
        this.name = name;
        this.species = species;
        this.meters = {
            hunger:100, //size of meters
            thirst:100,
            boredom:100
        }
        this.fill = {
            hunger:4, //how much each action fills the respective meter
            thirst:5,
            boredom:3
        }
        this.drain = {
            hunger:2, //how much the respective meter is drained per length of time
            thirst:2,
            boredom:1
        }
    }
    fillMeter(meter){
        this.meters(meter)+= this.fill(meter);
    }
    drainMeter(meter){
        this.meters(meter)-= this.drain(meter);
    }
}

class Animal1 extends Animal{
    constructor(name){
        super(name);
        this.species = "Animal1";
        this.meters = {
            newMeterName:80,
            anotherMeter:120
        }
    }
    playFetch(){ //action specific to animal1 animal
        this.fillMeter(boredem);
        //play animation for fetch
    }
}