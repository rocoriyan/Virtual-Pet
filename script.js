class Character {
    constructor(mood) {
        this.mood = mood;

        // Stats
        this.stats = {
            hunger: 100,
            thirst: 100,
            energy: 100,
            boredom: 100,
        };
    }

    // Methods for the character class
    feed() {
        this.stats.hunger += 25;
        this.stats.thirst -= 25;
        this.stats.energy -= 25;
    }

    hydrate() {
        this.stats.thirst += 25;
        this.stats.hunger -= 25;
        this.stats.energy -= 25;
    }

    nap() {
        this.stats.energy -= 25;
        this.stats.hunger -= 25;
        this.stats.thirst -= 25;
        this.stats.boredom += 25;
    }

    play() {
        this.stats.energy += 25;
        this.stats.hunger -= 25;
        this.stats.thirst -= 25;
        this.stats.boredom -= 25;
    }
}

class frog extends Character {
    constructor(mood) {
        super(mood);
    }

}

class duck extends Character {
    constructor(mood) {
        super(mood);
    }

}

// class rock extends Character {
//     constructor(mood) {
//         super(mood);
//     }

// }