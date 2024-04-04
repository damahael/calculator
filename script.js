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

const currentNumber = document.querySelector("#number");
const fullOperation = document.querySelector('#full-operation')

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
    return add(first, second)
  }

  if (operator === "-") {
    currentNumber.textContent = subtract(first, second);
    return subtract(first, second)
  }

  if (operator === "*") {
    currentNumber.textContent = multiply(first, second);
    return multiply(first, second)
  }

  if (operator === "/") {
    currentNumber.textContent = divide(first, second);
    return divide(first, second)
  }
}

const allDigits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");

let firstNumber = '';
let operatorValue = "";
let secondNumber = '';

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    operatorValue = operator.id;
  });
});

allDigits.forEach((digit) => {
  digit.addEventListener("click", () => {
    if (operatorValue == "") {
      firstNumber += digit.id;
      currentNumber.textContent = firstNumber;
      console.log("first", firstNumber);
    }

    if (operatorValue !== "") {
      secondNumber += digit.id
      currentNumber.textContent = secondNumber;
      console.log("second", secondNumber);
    }

    if (firstNumber !== '' && operatorValue !== '' && secondNumber !== '') {
      let result = operate(Number(firstNumber), operatorValue, Number(secondNumber))
      currentNumber.textContent = result
      firstNumber = result
      operatorValue = ''
      secondNumber = ''
      console.log('result', result);
      //after first and second numbers, the result becomes the value of firstNumber, so the operation can go on.
    }
  });
});

equal.addEventListener("click", () => {
  firstNumber = Number(firstNumber)
  secondNumber = Number(secondNumber)
  operate(firstNumber, operatorValue, secondNumber);
});

const clearButton = document.querySelector("#clear-button");

clearButton.addEventListener("click", () => {
  firstNumber = '';
  secondNumber = '';
  operatorValue = '';
  currentNumber.textContent = "";
});
