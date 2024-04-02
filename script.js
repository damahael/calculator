function add(number, secondNumber) {
  console.log(number + secondNumber);
}

function subtract(number, secondNumber) {
  console.log(number - secondNumber);
}

function multiply(number, secondNumber) {
  console.log(number * secondNumber);
}

function divide(number, secondNumber) {
  console.log(number / secondNumber);
}

let firstNumber;
let operator;
let secondNumber;

function operate(first, operator, second) {
  let values = 0;

  if (operator === "+") {
    values = add(first, second);
  }

  if (operator === "-") {
    values = subtract(first, second);
  }

  if (operator === "*") {
    values = multiply(first, second);
  }

  if (operator === "/ ") {
    values = divide(first, second);
  }
}

operate(25, "-", 10);

const digits = document.querySelector("#digits");

function addDigits() {
  for (let i = 9; i > -1; i--) {
    const digit = document.createElement("button");
    digit.classList.add("digit");
    digit.textContent = i;
    digits.appendChild(digit);
  }
  const dot = document.createElement("button");
  dot.classList.add("digit");
  dot.textContent = ".";
  digits.appendChild(dot);

  const equal = document.createElement("button");
  equal.classList.add("digit");
  equal.textContent = "=";
  digits.appendChild(equal);
}

addDigits();
