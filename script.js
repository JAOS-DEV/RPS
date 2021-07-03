"use strict";

const iconsEl = document.querySelectorAll(".img");
const paperIconBtnEl = document.querySelector(".img-icon-paper");
const rockIconBtnEl = document.querySelector(".img-icon-rock");
const scissorsIconBtnEl = document.querySelector(".img-icon-scissors");
const paperImgEl = document.getElementById("paperImg");
const rockImgEl = document.getElementById("rockimg");
const scissorsImgEl = document.getElementById("scissorsImg");
const pickedImgEl = document.getElementById("pickedImg");
const housePickedImgEl = document.getElementById("housePickedImg");
const pickedBtnEl = document.getElementById("pickedBtn");
const houseBtnEl = document.getElementById("houseBtn");
const placeholderBtnEl = document.getElementById("placeholderBtn");
const iconContainer = document.querySelector(".icon-choice");
const pickedTextEl = document.querySelectorAll(".pickedText");
const winnerTextEL = document.querySelector(".winner-text");
const playAgainEL = document.querySelector(".play-again");
const scoreNumberEl = document.querySelector(".score-number");
const appEl = document.querySelector(".App");

// ================================================
let score = 0;
scoreNumberEl.textContent = score;
// ================================================
const init = () => {
  // score = score;
  // Set/Hide classes of picked and house buttons
  pickedBtnEl.className = "img-icon hidden";
  houseBtnEl.className = "img-icon hidden";

  // Show icon choice
  paperIconBtnEl.classList.remove("hidden");
  scissorsIconBtnEl.classList.remove("hidden");
  rockIconBtnEl.classList.remove("hidden");

  // Hide play again buttons and text
  playAgainEL.classList.add("hidden");
  winnerTextEL.classList.add("hidden");
  pickedTextEl.forEach((el) => el.classList.add("hidden"));
  // Default icon layout
  iconContainer.classList.remove("icon-choice-flex");
  // SHow background triangle
  appEl.style.background = "url(/images/bg-triangle.svg) no-repeat center 100%";
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

  // remove background triangle
  appEl.style.background = "none";
  // Show picked text
  pickedTextEl.forEach((el) => el.classList.remove("hidden"));

  // hide selection
  rockIconBtnEl.classList.add("hidden");
  paperIconBtnEl.classList.add("hidden");
  scissorsIconBtnEl.classList.add("hidden");

  // Set picked icon and display
  pickedImgEl.src = src;
  pickedBtnEl.classList.add(`img-icon-${id}`);
  pickedBtnEl.classList.remove("hidden");
  placeholderBtnEl.classList.remove("hidden");

  // Set timeout for house choice reveal
  setTimeout(() => {
    showHouseIcon(id, computerIcon);
  }, 3000);

  // Css to fix icon alignment
  iconContainer.classList.add("icon-choice-flex");
};

const showHouseIcon = (id, computerIcon) => {
  placeholderBtnEl.classList.add("hidden");
  houseBtnEl.classList.add(`img-icon-${computerIcon}`);
  houseBtnEl.classList.remove("hidden");
  housePickedImgEl.src = `./images/icon-${computerIcon}.svg`;

  // Display radial effect
  pickedBtnEl.classList.add("img-icon-radial-effect");

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
    scoreNumberEl.textContent = score;

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
    scoreNumberEl.textContent = score;

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
    scoreNumberEl.textContent = score;

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
    scoreNumberEl.textContent = score;

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
    scoreNumberEl.textContent = score;

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
    scoreNumberEl.textContent = score;

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
    scoreNumberEl.textContent = score;

    console.log(score);
    // Display winner text
    winnerTextEL.classList.remove("hidden");
  }
};

// ======================================
// Play again button

playAgainEL.addEventListener("click", (e) => {
  init();
});
