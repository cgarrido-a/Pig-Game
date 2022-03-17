"use strict";

const btnRollDice = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNewGame = document.querySelector(".btn--new");
const dice = document.querySelector(".dice");
const scorePlayer0 = document.querySelector("#score--0");
const scorePlayer1 = document.querySelector("#score--1");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

let score, active, accumulativeScore;

const initialize = function () {
  score = 0;
  active = 0;
  accumulativeScore = [0, 0];
  scorePlayer0.textContent = 0;
  scorePlayer1.textContent = 0;
  dice.classList.add("dice-hidden");
  btnHold.disabled = false;
  btnRollDice.disabled = false;
  player0.classList.add("player--active");
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
};

initialize();

const activePlayer = function () {
  active = active === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

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
    activePlayer();
  }
});

btnHold.addEventListener("click", function () {
  accumulativeScore[active] += score;
  score = 0;
  document.querySelector(`#score--${active}`).textContent =
    accumulativeScore[active];
  document.querySelector(`#current--${active}`).textContent = score;

  if (accumulativeScore[active] >= 20) {
    document.querySelector(`#score--${active}`).textContent = "You won!!!!!!";
    document
      .querySelector(`.player--${active}`)
      .classList.add("player--winner");
    document
      .querySelector(`.player--${active}`)
      .classList.remove("player--active");
    btnHold.disabled = true;
    btnRollDice.disabled = true;
  } else {
    activePlayer();
  }
});

btnNewGame.addEventListener("click", function () {
  initialize();
});
