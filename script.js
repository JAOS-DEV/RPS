"use strict";

const iconsEl = document.querySelectorAll(".img");
const paperIconBtnEl = document.querySelector(".img-icon-paper");
const rockIconBtnEl = document.querySelector(".img-icon-rock");
const scissorsIconBtnEl = document.querySelector(".img-icon-scissors");
const paperImgEl = document.getElementById("paperImg");
const rockImgEl = document.getElementById("rockimg");
const scissorsImgEl = document.getElementById("scissorsImg");

// ================================================

// ================================================

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

// ===================

const displayChosenIcon = (buttonEl, imageEl) => {
  console.log("Display chosen Icon + random icon");
  const { id } = buttonEl;
  const { src } = imageEl;
  const computerIcon = randomIcon();

  // displayChosenIcons

  // Hide rock Icon
  rockIconBtnEl.classList.add("hidden");
  // Change paper to selcted icon
  paperIconBtnEl.classList.remove(`img-icon-paper`);
  paperIconBtnEl.classList.add(`img-icon-${id}`);
  paperImg.src = src;
  // Change scissors to computers icon
  scissorsIconBtnEl.classList.remove(`img-icon-scissors`);
  scissorsIconBtnEl.classList.add(`img-icon-${computerIcon}`);
  scissorsImg.src = `./images/icon-${computerIcon}.svg`;

  // Check winner
  checkWinner(id, computerIcon);
  // ==============
};

// Check Winner
const checkWinner = (id, computerIcon) => {
  if (id === computerIcon) return console.log(`draw`);
  // Paper Logic
  if (id === "paper" && computerIcon === "rock") return console.log("winner");

  if (id === "paper" && computerIcon === "scissors") return console.log("loser");

  // Rock Logic
  if (id === "rock" && computerIcon === "scissors") return console.log("winner");

  if (id === "rock" && computerIcon === "paper") return console.log("loser");

  // Scissors Logic
  if (id === "scissors" && computerIcon === "paper") return console.log("winner");

  if (id === "scissors" && computerIcon === "rock") return console.log("loser");
};
