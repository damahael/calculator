const digits = document.querySelector("#digits");

function addDigits() {
  for (let i = 9; i > -1; i--) {
    const digit = document.createElement("button");
    digit.classList.add("digit");
    digit.setAttribute("id", i);
    digit.textContent = i;
    digits.appendChild(digit);
  }
  const dot = document.createElement("button");
  dot.classList.add("digit");
  dot.textContent = ".";
  digits.appendChild(dot);

  const equal = document.createElement("button");
  //equal.classList.add("operator");
  equal.setAttribute("id", "equal");
  equal.textContent = "=";
  digits.appendChild(equal);
}

addDigits();

let displayValue = 0;
const display = document.querySelector("#display");

function add(number, secondNumber) {
  return number + secondNumber;
}

function subtract(number, secondNumber) {
  return number - secondNumber;
}

function multiply(number, secondNumber) {
  return number * secondNumber;
}

function divide(number, secondNumber) {
  return number / secondNumber;
}

function operate(first, operator, second) {
  if (operator === "+") {
    display.textContent = add(first, second);
  }

  if (operator === "-") {
    display.textContent = subtract(first, second);
  }

  if (operator === "*") {
    display.textContent = multiply(first, second);
  }

  if (operator === "/") {
    display.textContent = divide(first, second);
  }
}

const allDigits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");

let firstNumber;
let operatorValue = "";
let secondNumber;

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    operatorValue = operator.id;
  });
});

allDigits.forEach((digit) => {
  digit.addEventListener("click", () => {
    if (operatorValue == "") {
      firstNumber = Number(digit.id);
      display.textContent = firstNumber;
      console.log("first", firstNumber);
    }

    if (operatorValue !== "") {
      secondNumber = Number(digit.id);
      console.log("second", secondNumber);
      display.textContent = secondNumber;
    }

    console.log("hey", firstNumber, secondNumber);
  });
});

equal.addEventListener("click", () => {
  operate(firstNumber, operatorValue, secondNumber);
});

const clearButton = document.querySelector("#clear-button");

clearButton.addEventListener("click", () => {
  firstNumber = 0;
  secondNumber = 0;
  display.textContent = "";
});
