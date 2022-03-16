"use strict";

const btnRollDice = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNewGame = document.querySelector(".btn--new");
const dice = document.querySelector(".dice");
const scorePlayer0 = document.querySelector("#score--0");
const scorePlayer1 = document.querySelector("#score--1");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
let score = 0;
let active = 0;
let currentScore0 = document.querySelector(`#current--${active}`).textContent;

let initialScore = [0, 0];
scorePlayer0.textContent = 0;
scorePlayer1.textContent = 0;
dice.classList.add("dice-hidden");

btnRollDice.addEventListener("click", function () {
  // roll the dice and display de roll
  const randomNumber = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${randomNumber}.png`;
  dice.classList.remove("dice-hidden");

  //add dice number tu current score
  if (randomNumber !== 1) {
    score += randomNumber;
    document.querySelector(`#current--${active}`).textContent = score;
  } else {
    score = 0;
    document.querySelector(`#current--${active}`).textContent = score;
    active = active === 0 ? 1 : 0;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
  }
});

btnHold.addEventListener("click", function () {
  document.querySelector(`#score--${active}`).textContent = initialScore;
  score = 0;
  active = active === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
});
