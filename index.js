// Array to store the possible choices
var choices = ["rock", "paper", "scissors"];

// Variables to keep track of the scoreboard
var wins = 0;
var losses = 0;
var ties = 0;

// Add event listeners to the buttons
document.getElementById("rock").addEventListener("click", function() {
  playGame("rock");
});

document.getElementById("paper").addEventListener("click", function() {
  playGame("paper");
});

document.getElementById("scissors").addEventListener("click", function() {
  playGame("scissors");
});

// Function to play the game
function playGame(playerChoice) {

  // Generate a random choice for the computer
var botChoice = choices[Math.floor(Math.random() * choices.length)];

// Determine the result of the game
var result;
  if (playerChoice === botChoice) {
  result = "It's a tie!";
  } else if (
    (playerChoice === "rock" && botChoice === "scissors") ||
    (playerChoice === "paper" && botChoice === "rock") ||
    (playerChoice === "scissors" && botChoice === "paper")
  ) {
    result = "You win!";
    wins++;
  } else {
    result = "You lose!";
    losses++;
  }

  // Update the scoreboard
document.getElementById("wins").textContent = wins;
document.getElementById("losses").textContent = losses;
document.getElementById("ties").textContent = ties;

// Update the match history
var historyList = document.getElementById("history-list");
var listItem = document.createElement("li");
  listItem.textContent = "You chose " + playerChoice + ", Computer chose " + botChoice + ". Result: " + result;
  historyList.prepend(listItem);

// Update the result div
document.getElementById("result").textContent = result;

// Display the result
document.getElementById("result").innerText =
  "Computer picked: " + botChoice + "\nResult: " + result;
}



