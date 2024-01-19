class Frog extends Animal {
    constructor(Frogo) {
        super(Frogo, 'Frog');
        this.jumps = 100;
    }
    jump(){
        this.jumps += 15;

    }
    feedWithFlies() {
        this.fullness += 20;
        this.happiness += 10;
        //You can add addtitional effects or logic based on feeding with flies
    }
    
}
function feedWithFlies() {
    if(currenPet instanceof Frog) {
        currenPet.feedWithFlies();
        updateDisplay();
    } else {
        alert('Feeding with flies is a special treat only for frogs!');
    }
}
