"use strict";

const numbersArr = document.querySelectorAll(".number");
const outputEl = document.querySelector(".output");
const clearEl = document.querySelector(".clear");
const decimalEl = document.querySelector(".decimal");

numbersArr.forEach((numberEl) => {
  numberEl.addEventListener("click", (e) => {
    outputEl.textContent += numberEl.textContent;
  });
});

clearEl.addEventListener("click", (e) => (outputEl.textContent = ""));

decimalEl.addEventListener("click", (e) => {
  if (!outputEl.textContent.includes(".")) outputEl.textContent += ".";
});
