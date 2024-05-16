const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function add(num1, num2) {
  return parseFloat(num1) + parseFloat(num2);
}

function subtract(num1, num2) {
  return parseFloat(num1) - parseFloat(num2);
}

function multiply(num1, num2) {
  return parseFloat(num1) * parseFloat(num2);
}

function divide(num1, num2) {
  if (num2 != '0') {
    return parseFloat(num1) / parseFloat(num2);
  } else {
    console.log('Error! Division by zero is not allowed.');
    process.exit(1);
  }
}

rl.question('Enter the first number: ', (firstNumber) => {
  rl.question('Enter the operator (+, -, *, /): ', (operator) => {
    rl.question('Enter the second number: ', (secondNumber) => {
      let result;

      switch (operator) {
        case '+':
          result = add(firstNumber, secondNumber);
          break;
        case '-':
          result = subtract(firstNumber, secondNumber);
          break;
        case '*':
          result = multiply(firstNumber, secondNumber);
          break;
        case '/':
          result = divide(firstNumber, secondNumber);
          break;
        default:
          console.log('Invalid operator! Please use one of +, -, *, /.');
          rl.close();
          return;
      }

      console.log(`The result is: ${result}`);
      rl.close();
    });
  });
});


const { add } = require('./test'); // assuming you have this function in test.js

test('adds 1 + 2 to equal 3', () => {
  expect(add('1', '2')).toBe(3);
});

test('adds 0.1 + 0.2 to approximately equal 0.3', () => {
  expect(add('0.1', '0.2')).toBeCloseTo(0.3);
});

test('adds a number and a non-numeric string to be NaN', () => {
  expect(add('1', 'abc')).toBeNaN();
});