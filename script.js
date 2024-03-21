function greeting(){
    alert("Hi there!");
    const name = prompt("What's your name?");
    console.log(name);
    alert("Your name is " + name + ", huh?");
    alert(name + "...");
    alert("Hey, " + name + "?");
    alert("Can you click that button for me?");
}

greeting();

// Create a button to summon the creature

const summonButton = document.createElement("button");

const sButtonText = new Text("Summon in the creature.");
summonButton.appendChild(sButtonText);

document.body.appendChild(summonButton);


// Images of the creature
const tbh = "https://i.kym-cdn.com/entries/icons/facebook/000/039/484/cover7.jpg";
const confetti = "https://media.tenor.com/EI8GDBpPCDoAAAAM/tbh-creature.gif";

// Create a button to change the image
const joyousButton = document.createElement("button");

const jButtonText = new Text("Yippee!");
joyousButton.appendChild(jButtonText);

const image = document.createElement("img");
// Function for summoning the creature
function summon(){

    image.src = tbh;

    document.body.appendChild(image);
    document.body.appendChild(joyousButton);
    document.body.removeChild(summonButton);

    alert("Thank you! You've released me from my prison after 10,000 years...")
    request();

}

function request(){

    alert("Ahh... that's much better.");
    alert("You know what would make me feel even better-er, " + name + "?" );
    alert("If you pressed that yippee button over there...");
}


// Changes the original image to a new one
function yippee(){

        if(image.src === tbh){
            image.src = confetti;
            image.style.width = "500px";
        }
        alert("Yippee!");

        const army = document.createElement("img");

        army.src = confetti;

        document.body.appendChild(army);

    }

// Pressing the summon button will summon the creature
summonButton.addEventListener("click", summon);

// Pressing the yippee button will change the picture
joyousButton.addEventListener("click", yippee);