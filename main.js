"use strict";

const numbersArr = document.querySelectorAll(".number");
const outputEl = document.querySelector(".output");
const clearEl = document.querySelector(".clear");
const decimalEl = document.querySelector(".decimal");
const equalsEl = document.querySelector(".equals");
const addEl = document.querySelector(".add");
const subtractEl = document.querySelector(".subtract");
const multiplyEl = document.querySelector(".multiply");
const divideEl = document.querySelector(".divide");

const outputCalculatedArray = [];

numbersArr.forEach((numberEl) => {
  numberEl.addEventListener("click", (e) => {
    outputEl.textContent += numberEl.textContent;
  });
});

clearEl.addEventListener("click", (e) => (outputEl.textContent = ""));

decimalEl.addEventListener("click", (e) => {
  if (!outputEl.textContent.includes(".")) outputEl.textContent += ".";
});

// Operators

function clearOutputField() {
  outputEl.textContent = "";
}

function add(event) {
  if (outputCalculatedArray.length === 0) {
    outputCalculatedArray.push(Number(outputEl.textContent));
    clearOutputField();
  } else {
    outputCalculatedArray.push(
      outputCalculatedArray[outputCalculatedArray.length - 1] +
        Number(outputEl.textContent)
    );

    clearOutputField();
    console.log(outputCalculatedArray);
  }
}

function equals(event) {
  outputEl.textContent =
    outputCalculatedArray[outputCalculatedArray.length - 1];
}

addEl.addEventListener("click", add);

equalsEl.addEventListener("click", equals);
