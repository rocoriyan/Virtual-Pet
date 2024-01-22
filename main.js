let hunger = document.getElementById('hunger-bar');
let happiness = document.getElementById('happiness-bar');
let energy = document.getElementById('energy-bar');

let petType = "duck"; // Default pet type

function choosePet() {
    petType = document.getElementById('pet-selection').value;
    console.log(`petType: ${petType}`);
    // You can add logic here to change the appearance of the pet based on the selected type
    updateStats(); // Update stats to reflect the change in pet type
}

// Modify the updateStats function to change the appearance of the pet based on the selected type
function updateStats() {
    // Customize the appearance based on the selected pet type
    if (petType === "duck") {
        // Adjust appearance for duck
        document.getElementById('pet').style.backgroundColor = "#ffcc00";
        document.getElementById('petImg').src="images/Duck1.gif";
    } else if (petType === "frog") {
        // Adjust appearance for frog
        document.getElementById('pet').style.backgroundColor = "#ff9900";
        document.getElementById('petImg').src="images/Frog1.gif";
    } else if (petType === "rock") {
        // Adjust appearance for rock
        document.getElementById('pet').style.backgroundColor = "#66ccff";
        document.getElementById('petImg').src="images/Rock1.gif";
    }
}

function updateStats() {
    document.getElementById('pet').style.width = `${hunger.value}px`;
    document.getElementById('pet').style.height =`${hunger.value}px`;

    document.getElementById('pet').style.backgroundColor = `rgb(${255 - happiness}, ${255}, ${255 - happiness})`;

    if(hunger.value == 0 || energy.value == 0 || happiness.value == 0){
        hunger.value = 0;
        energy.value = 0;
        happiness.value - 0;
        let gameOver = document.getElementById('gameOver');
        gameOver.style.display = 'block';
    }
    
}

function feed() {
    if (hunger.value < 90) {
        hunger.value += 10;
    } else {
        happiness.value -= 10;
    }
    updateStats();
}

function play() {
    if (happiness.value < 90) {
        happiness.value += 10;
    } else {
        energy.value -= 10;
    }
    updateStats();
}

function sleep() {
    if (energy.value < 90) {
        energy.value += 10;
    } else {
        happiness.value -= 10;
    }
    updateStats();
}

// Update stats every second
setInterval(function () {
    hunger.value -= 1;
    happiness.value -= 1;
    energy.value -= 1;

    updateStats();
}, 1000);