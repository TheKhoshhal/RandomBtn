"use strict";

const btnRandom = document.querySelector(".btn");

function getRandom() {
  return Math.trunc(Math.random() * 90) + 1;
}

btnRandom.addEventListener("click", function () {
  let randomNum1 = getRandom();
  let randomNum2 = getRandom();

  let cssProperty1 = randomNum1 + "%";
  let cssProperty2 = randomNum2 + "%";
  btnRandom.style.top = cssProperty1;
  btnRandom.style.left = cssProperty2;
});

btnRandom.style.top = getRandom() + "%";
btnRandom.style.left = getRandom() + "%";
