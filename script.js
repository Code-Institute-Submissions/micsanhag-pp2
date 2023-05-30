
var you;
var yourScore = 0;
var computer;
var computerScore = 0;

var choices = ["rock", "paper", "scissors"];

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        // <img id="rock" src="rock.jpg">
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".jpg";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice() {
    you = this.id;
    document.getElementById("your-choice").src = you + ".jpg";

    //random for oppponent
    computer = choices[Math.floor(Math.random() * 3)]; //0- .999999 * 3 = 0-2.99999
    document.getElementById("computer-choice").src = computer + ".jpg";

    //check for winner
    if (you == computer) {
        yourScore += 1;
        computerScore += 1;
    }
    else {
        if (you == "rock") {
            if (computer == "scissors") {
                yourScore += 1;
            }
            else if (computer == "paper") {
                computerScore += 1;
            }
        }
        else if (you == "scissors") {
            if (computer == "paper") {
                yourScore += 1;
            }
            else if (computer == "rock") {
                computerScore += 1;
            }
        }
        else if (you == "paper") {
            if (computer == "rock") {
                yourScore += 1;
            }
            else if (computer == "scissors") {
                computerScore += 1;
            }
        }
    }

    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("computer-score").innerText = computerScore;
}
