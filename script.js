let hunger = 50;
let happiness = 50;
let energy = 50;

let petType = "duck"; // Default pet type

function choosePet() {
    petType = document.getElementById('pet-selection').value;
    // You can add logic here to change the appearance of the pet based on the selected type
    updateStats(); // Update stats to reflect the change in pet type
}

// Modify the updateStats function to change the appearance of the pet based on the selected type
function updateStats() {

    // Customize the appearance based on the selected pet type
    if (petType === "duck") {
        // Adjust appearance for duck
        document.getElementById('pet').style.backgroundColor = "#ffcc00";
    } else if (petType === "frog") {
        // Adjust appearance for frog
        document.getElementById('pet').style.backgroundColor = "#ff9900";
    } else if (petType === "rock") {
        // Adjust appearance for rock
        document.getElementById('pet').style.backgroundColor = "#66ccff";
    }
}

function updateStats() {
    document.getElementById('pet').style.width = `${hunger}px`;
    document.getElementById('pet').style.height = `${hunger}px`;

    document.getElementById('pet').style.backgroundColor = `rgb(${255 - happiness}, ${255}, ${255 - happiness})`;
}

function feed() {
    if (hunger < 90) {
        hunger += 10;
    } else {
        happiness -= 10;
    }
    updateStats();
}

function play() {
    if (happiness < 90) {
        happiness += 10;
    } else {
        energy -= 10;
    }
    updateStats();
}

function sleep() {
    if (energy < 90) {
        energy += 10;
    } else {
        happiness -= 10;
    }
    updateStats();
}

// Update stats every second
setInterval(function () {
    hunger -= 1;
    happiness -= 1;
    energy -= 1;

    updateStats();
}, 1000);