let name;
let correct = false;

// The creature greets the user
function greeting() {
  alert("Hi there!");
  userName();
}

greeting();

// Will repeatedly ask for the user's name until they confirm
function userName() {
  while (correct === false) {
    name = prompt("What's your name?");
    correct = confirm(`Your name is ${name}?`);
  }
  // Gives a unique response if you input the name "TBH"
  // A small Easter egg to the featured creature's name
  if (name === "TBH") {
    alert("Wow, me too!");
  }
  // Calls the next function once everything has been confirmed
  pressIt();
}

// Asks the user to press the yippee button
function pressIt() {
  alert("Your name is " + name + ", huh?");
  alert(name + "...");
  alert("Hey, " + name + "?");
  alert("Can you click that button for me?");
}

// Create a button to summon the creature
const summonButton = document.createElement("button");

// Adds the text "Summon in the creature" to the button
const sButtonText = new Text("Summon in the creature.");
summonButton.appendChild(sButtonText);

document.body.appendChild(summonButton);

// Images of the creature
const tbh =
  "https://i.kym-cdn.com/entries/icons/facebook/000/039/484/cover7.jpg";
const confetti = "https://media.tenor.com/EI8GDBpPCDoAAAAM/tbh-creature.gif";

// Create a button to change the image
const joyousButton = document.createElement("button");

// Adds the text "Yippee!" to the button
const jButtonText = new Text("Yippee!");
joyousButton.appendChild(jButtonText);

const image = document.createElement("img");
// Function for summoning the creature
function summon() {
  image.src = tbh;
  // Adds the image of the creature to the page
  document.body.appendChild(image);
  // Add the yippee button to the page
  document.body.appendChild(joyousButton);
  // Removes the summon button from the page so it cannot be clicked again
  document.body.removeChild(summonButton);

  alert("Thank you! You've released me from my prison after 10,000 years...");
  request();
}

// Dialogue from the creature
function request() {
  alert("Ahh... that's much better.");
  alert("You know what would make me feel even better-er, " + name + "?");
  alert("If you pressed that yippee button over there...");
}

// Changes the original image to a new one
function yippee() {
  if (image.src === tbh) {
    image.src = confetti;
    image.style.width = "500px";
  }
  alert("Yippee!");
  // Asks the user how many clones they want to appear on the page
  let clones = prompt(
    "Now we multiply. How many soldiers in our army shall we summon?"
  );

  // Uses the number prompted to display as many clones as the play inputted
  for (let count = 0; count < clones; count++) {
    const army = document.createElement("img");
    army.src = confetti;
    army.style.width = "500px";
    // Adds the army to the page
    document.body.appendChild(army);
  }
  // Removes the yippee button so it can't be pressed again after already being pressed
  document.body.removeChild(joyousButton);
}

// Pressing the summon button will summon the creature
summonButton.addEventListener("click", summon);

// Pressing the yippee button will change the picture
joyousButton.addEventListener("click", yippee);
