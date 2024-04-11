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
  dot.setAttribute("id", ".");
  digits.appendChild(dot);

  const equal = document.createElement("button");
  equal.setAttribute("id", "equal");
  equal.textContent = "=";
  digits.appendChild(equal);
}

addDigits();

const currentNumber = document.querySelector("#number");
const fullOperation = document.querySelector("#full-operation");

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
    currentNumber.textContent = add(first, second);
    return add(first, second);
  }

  if (operator === "-") {
    currentNumber.textContent = subtract(first, second);
    return subtract(first, second);
  }

  if (operator === "*") {
    currentNumber.textContent = multiply(first, second);
    return multiply(first, second);
  }

  if (operator === "/") {
    currentNumber.textContent = divide(first, second);
    return divide(first, second);
  }
}

const allDigits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");

let current = "firstNumber";
let firstNumber = "";
let operatorValue = "";
let secondNumber = "";
let calculationPending = false;
let keyboardPress = false;

function addOperator(varValue) {
  if (calculationPending) {
    firstNumber = operate(
      Number(firstNumber),
      operatorValue,
      Number(secondNumber)
    );
    fullOperation.textContent += "=" + " " + firstNumber + " ";
    currentNumber.textContent = firstNumber;
    secondNumber = "";
  }
  operatorValue = varValue;
  fullOperation.textContent += operatorValue + " ";
}

function addNumber(varValue) {
  if (operatorValue == "") {
    firstNumber += varValue;
    currentNumber.textContent = firstNumber;
  } else {
    secondNumber += varValue;
    currentNumber.textContent = secondNumber;
    calculationPending = true;
  }

  fullOperation.textContent =
    firstNumber + " " + operatorValue + " " + secondNumber + " ";
}

function clickEqual () {
  if (firstNumber !== "" && operatorValue !== "" && secondNumber !== "") {
    firstNumber = operate(
      Number(firstNumber),
      operatorValue,
      Number(secondNumber)
    );
    currentNumber.textContent = firstNumber;
    fullOperation.textContent += '=' + ' ' + firstNumber + ' '
    operatorValue = "";
    secondNumber = "";
    calculationPending = false;
  }
}

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    addOperator(operator.id);
  });
});

window.addEventListener("keypress", (e) => {
  if (!isNaN(e.key)) {
    addNumber(e.key);
  }

  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
    addOperator(e.key);
  }

  if (e.key === '=') {
    clickEqual()
  }
});

allDigits.forEach((digit) => {
  digit.addEventListener("click", () => {
    addNumber(digit.id);
  });
});

equal.addEventListener("click", () => {
  clickEqual()
});

const clearButton = document.querySelector("#clear-button");

clearButton.addEventListener("click", () => {
  array = [];
  firstNumber = "";
  secondNumber = "";
  operatorValue = "";
  currentNumber.textContent = "";
  fullOperation.textContent = "";
});
