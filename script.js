"use strict";

const btnRollDice = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNewGame = document.querySelector(".btn--new");
const dice = document.querySelector(".dice");
const scorePlayer1 = document.querySelector("#score--0");
const scorePlayer2 = document.querySelector("#score--1");
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
let currentScore1 = document.querySelector("#current--0").textContent;
let currentScore2 = document.querySelector("#current--1").textContent;

scorePlayer1.textContent = 0;
scorePlayer2.textContent = 0;
currentScore1 = 0;
currentScore2 = 0;
dice.classList.add("dice-hidden");

btnRollDice.addEventListener("click", function () {
  // roll the dice and display de roll
  const randomNumber = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${randomNumber}.png`;
  dice.classList.remove("dice-hidden");

  //add dice number tu current score
  if (randomNumber !== 1) {
    currentScore1 += randomNumber;
    document.querySelector("#current--0").textContent = currentScore1;
  } else {
    currentScore1 = 0;
    document.querySelector("#current--0").textContent = currentScore1;
    player1.classList.toggle("player--active");
    player2.classList.toggle("player--active");
  }
});
