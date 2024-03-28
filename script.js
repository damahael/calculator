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

let firstNumber
let operator
let secondNumber

function operate (first, operator, second) {
    let values = 0 
    
    if (operator === '+') {
        values = add(first, second) }

    if (operator === '-') {
        values = subtract(first, second)
    }

    if (operator === '*') {
        values = multiply(first, second)
    }

    if (operator === '/ ') {
        values = divide(first, second)
    }
}

operate(25, '-', 10)


  
