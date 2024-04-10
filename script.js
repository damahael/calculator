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
  //equal.classList.add("operator");
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
let array = [];
let calculationPending = false; 

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (calculationPending) {
      firstNumber = operate(Number(firstNumber), operatorValue, Number(secondNumber));
      currentNumber.textContent = firstNumber;
      secondNumber = '';
      console.log('result', firstNumber);
    }
    operatorValue = operator.id;
    calculationPending = (secondNumber !== ''); 
  });
});

allDigits.forEach((digit) => {
  digit.addEventListener("click", () => {
    if (operatorValue == "") {
      firstNumber += digit.id;
      currentNumber.textContent = firstNumber;
    } else {
      secondNumber += digit.id;
      currentNumber.textContent = secondNumber;
      calculationPending = true;
    }
  });
});

equal.addEventListener("click", () => {
  if (firstNumber !== '' && operatorValue !== '' && secondNumber !== '') {
    firstNumber = operate(Number(firstNumber), operatorValue, Number(secondNumber));
    currentNumber.textContent = firstNumber;
    operatorValue = '';
    secondNumber = '';
    calculationPending = false;
    console.log('result', firstNumber);
  }
});

const clearButton = document.querySelector("#clear-button");

clearButton.addEventListener("click", () => {
  array = [];
  firstNumber = "";
  secondNumber = "";
  operatorValue = "";
  currentNumber.textContent = "";
});
