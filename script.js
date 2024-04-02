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

let firstNumber;
let operator;
let secondNumber;
let displayValue = 0;

function operate(first, operator, second) {
  if (operator === "+") {
    return (displayValue = add(first, second));
  }

  if (operator === "-") {
    console.log((displayValue = subtract(first, second)));
  }

  if (operator === "*") {
    displayValue = multiply(first, second);
  }

  if (operator === "/ ") {
    displayValue = divide(first, second);
  }
}

operate(35, "-", 10);

const digits = document.querySelector("#digits");
const display = document.querySelector("#display");

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
  equal.classList.add("digit");
  equal.textContent = "=";
  digits.appendChild(equal);
}

addDigits();

const allDigits = document.querySelectorAll(".digit");
let num = "";

allDigits.forEach((digit) => {
  digit.addEventListener("click", () => {
    num += digit.id;
    display.textContent = num;
    console.log(num);
  });
});

const clearButton = document.querySelector("#clear-button")

clearButton.addEventListener('click', () => {
  num = ''
  display.textContent = num;
})

