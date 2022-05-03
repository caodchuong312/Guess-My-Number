"use strict";
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let heart = 5;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    displayMessage("No Number");
  } else if (guess === number) {
    displayMessage("Correct ! You win !");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector("body").style.width = "#30rem";

    document.querySelector(".number").textContent = number;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else {
    if (heart > 1) {
      displayMessage(guess > number ? "too high" : "too low");
      score--;
      heart--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".heart").textContent = heart;
    } else {
      displayMessage("You lost the game! Please click aganin!");
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  heart = 5;
  number = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".heart").textContent = heart;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector("body").style.width = "#15rem";
});
