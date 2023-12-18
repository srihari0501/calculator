let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function performOperation(operator) {
  display.value += operator;
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    alert('Invalid expression');
    clearDisplay();
  }
}

function clearDisplay() {
  display.value = '';
}

document.addEventListener('keydown', function (event) {
  const key = event.key;
  if (!isNaN(key) || key === '.') {
    appendToDisplay(key);
  } else {
    alert('Only numbers are allowed');
  }
});

function appendToDisplay(value) {
  display.value += value;
}

function performOperation(operator) {
  display.value += operator;
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    alert('Invalid expression');
    clearDisplay();
  }
}

function clearDisplay() {
  display.value = '';
}

function clearMemory() {
  localStorage.removeItem('calculatorMemory');
}

function addToMemory() {
  const currentValue = parseFloat(display.value);
  const storedValue = parseFloat(localStorage.getItem('calculatorMemory')) || 0;
  const newValue = currentValue + storedValue;
  localStorage.setItem('calculatorMemory', newValue);
}

function subtractFromMemory() {
  const currentValue = parseFloat(display.value);
  const storedValue = parseFloat(localStorage.getItem('calculatorMemory')) || 0;
  const newValue = storedValue - currentValue;
  localStorage.setItem('calculatorMemory', newValue);
}

document.addEventListener('keydown', function (event) {
  const key = event.key;

  if (!isNaN(key) || key === '.') {
    appendToDisplay(key);
  } else {
    alert('Only numbers are allowed');
  }
});
