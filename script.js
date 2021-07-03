"use strict";

const iconsEl = document.querySelectorAll(".img");
const paperIconBtnEl = document.querySelector(".img-icon-paper");
const rockIconBtnEl = document.querySelector(".img-icon-rock");
const scissorsIconBtnEl = document.querySelector(".img-icon-scissors");
const paperImgEl = document.getElementById("paperImg");
const rockImgEl = document.getElementById("rockimg");
const scissorsImgEl = document.getElementById("scissorsImg");
const placeholderBtnEl = document.getElementById("placeholderBtn");
const iconContainer = document.querySelector(".icon-choice");
const pickedTextEl = document.querySelectorAll(".pickedText");
const winnerTextEL = document.querySelector(".winner-text");
const playAgainEL = document.querySelector(".play-again");

// ================================================
let score = 0;
// ================================================
const init = () => {
  score = 0;
  pickedTextEl.classList.add("hidden");
  // Change paper to selcted icon
  paperIconBtnEl.classList.add(`img-icon-paper`);
  paperIconBtnEl.classList.remove(`img-icon-${id}`);
};

// Random icon
const randomIcon = () => {
  const icons = ["rock", "paper", "scissors"];
  const num = Math.trunc(Math.random() * 3);

  return icons[num];
};

// ===================================
// Add event listeners to icons
iconsEl.forEach((iconEl) => {
  iconEl.addEventListener("click", (e) => {
    console.log("click Event");
    const buttonEl = e.target.closest(".img-icon");
    const imageEl = e.target.closest(".img");

    // Call display icons
    displayChosenIcon(buttonEl, imageEl);
  });
});

// ===================================
// Display chosen icons
const displayChosenIcon = (buttonEl, imageEl) => {
  console.log("Display chosen Icon + random icon");
  const { id } = buttonEl;
  const { src } = imageEl;
  const computerIcon = randomIcon();

  // displayChosenIcons
  // Show picked text
  pickedTextEl.forEach((el) => el.classList.remove("hidden"));
  // Hide rock Icon
  rockIconBtnEl.classList.add("hidden");
  // Change paper to selcted icon
  paperIconBtnEl.classList.remove(`img-icon-paper`);
  paperIconBtnEl.classList.add(`img-icon-${id}`);
  paperImg.src = src;

  // Change scissors to computers icon after delay
  placeholderBtnEl.classList.remove("hidden");
  scissorsIconBtnEl.classList.add("hidden");
  setTimeout(() => {
    showHouseIcon(id, computerIcon);
  }, 3000);

  // Css to fix icon alignment
  iconContainer.classList.add("icon-choice-flex");
  paperIconBtnEl.style.margin = "0rem";
  scissorsIconBtnEl.style.margin = "0rem";
};

const showHouseIcon = (id, computerIcon) => {
  placeholderBtnEl.classList.add("hidden");
  scissorsIconBtnEl.classList.remove("hidden");
  scissorsIconBtnEl.classList.remove(`img-icon-scissors`);
  scissorsIconBtnEl.classList.add(`img-icon-${computerIcon}`);
  scissorsImg.src = `./images/icon-${computerIcon}.svg`;
  // Check winner
  checkWinner(id, computerIcon);
};

// Check Winner
const checkWinner = (id, computerIcon) => {
  if (id === computerIcon) {
    console.log(`draw`);
    // Show play again button
    playAgainEL.classList.remove("hidden");
    // Change winner text to "DRAW"
    winnerTextEL.textContent = "DRAW";
    // Update scoreboard
    console.log(score);
    // Display winner text
    winnerTextEL.classList.remove("hidden");
  }
  // Paper Logic
  if (id === "paper" && computerIcon === "rock") {
    console.log("winner");
    // Show play again button
    playAgainEL.classList.remove("hidden");
    // Change winner text to "DRAW"
    winnerTextEL.textContent = "WINNER!";
    // Update scoreboard
    score++;
    console.log(score);
    // Display winner text
    winnerTextEL.classList.remove("hidden");
  }
  if (id === "paper" && computerIcon === "scissors") {
    console.log("loser");
    // Show play again button
    playAgainEL.classList.remove("hidden");
    // Change winner text to "DRAW"
    winnerTextEL.textContent = "LOSER!";
    // Update scoreboard
    score--;
    console.log(score);
    // Display winner text
    winnerTextEL.classList.remove("hidden");
  }

  // Rock Logic
  if (id === "rock" && computerIcon === "scissors") {
    console.log("winner");
    // Show play again button
    playAgainEL.classList.remove("hidden");
    // Change winner text to "DRAW"
    winnerTextEL.textContent = "WINNER!";
    // Update scoreboard
    score++;
    console.log(score);
    // Display winner text
    winnerTextEL.classList.remove("hidden");
  }

  if (id === "rock" && computerIcon === "paper") {
    console.log("loser");
    // Show play again button
    playAgainEL.classList.remove("hidden");
    // Change winner text to "DRAW"
    winnerTextEL.textContent = "LOSER!";
    // Update scoreboard
    score--;
    console.log(score);
    // Display winner text
    winnerTextEL.classList.remove("hidden");
  }

  // Scissors Logic
  if (id === "scissors" && computerIcon === "paper") {
    console.log("winner");
    // Show play again button
    playAgainEL.classList.remove("hidden");
    // Change winner text to "DRAW"
    winnerTextEL.textContent = "WINNER!";
    // Update scoreboard
    score++;
    console.log(score);
    // Display winner text
    winnerTextEL.classList.remove("hidden");
  }

  if (id === "scissors" && computerIcon === "rock") {
    console.log("loser");
    // Show play again button
    playAgainEL.classList.remove("hidden");
    // Change winner text to "DRAW"
    winnerTextEL.textContent = "LOSER!";
    // Update scoreboard
    score--;
    console.log(score);
    // Display winner text
    winnerTextEL.classList.remove("hidden");
  }
  console.log(`score end ${score}`);
  paperIconBtnEl.classList.add("img-icon-radial-effect");
};

// ======================================
// Play again button
const playAgain = () => {};

playAgainEL.addEventListener("click", (e) => {
  playAgain();
});
