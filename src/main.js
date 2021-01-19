/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// window.onload = () => {
//   let randomSuit = generateRandomSuit();
//   let randomNumber = generateRandomNumber();
//   document.querySelector(".top-suit").innerHTML = randomSuit;
//   document.querySelector(".bottom-suit").innerHTML = randomSuit;
//   document.querySelector(".middle").innerHTML = randomNumber;
// };
let generateRandomNumber = () => {
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let randomNumber = Math.floor(Math.random() * numbers.length);
  return numbers[randomNumber];
};
let generateRandomSuit = () => {
  let suit = ["♦", "♠", "♥", "♣"];

  let randomSuit = Math.floor(Math.random() * suit.length);
  return suit[randomSuit];
};
window.onload = function cardRandom() {
  document.querySelector("body").style.background = "#OE7E12";
  let card = document.querySelector(".card");
  card.style.background = "white";
  let top = document.querySelector(".top-suit");
  top.style.justifyContent = "flex-start";
  let middle = document.querySelector(".middle-suit");
  middle.style.textAlign = "center";
  middle.style.fontSize = "300px";
  middle.style.paddingTop = "1cm";
  let bottom = document.querySelector(".bottom-suit");
  bottom.style.justifyContent = "flex-end";

  middle.textContent = generateRandomNumber();
  let suit = generateRandomSuit();
  top.textContent = suit;
  bottom.textContent = suit;

  if (suit === "♥" || suit === "♦") {
    card.style.color = "red";
  } else {
    card.style.color = "black";
  }
  document.getElementById("botton").addEventListener("click", cardRandom);
};
