import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div"); 

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

const first2 = document.querySelector("#primer-numero2");
const second2 = document.querySelector("#segundo-numero2");
const form2 = document.querySelector("#multiplicar-form");
const div2 = document.querySelector("#resultado-div2");

form2.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber2 = Number.parseInt(first2.value);
  const secondNumber2 = Number.parseInt(second2.value);

  div2.innerHTML = "<p>" + multiplicar(firstNumber2, secondNumber2) + "</p>";
});