let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    if (currentInput === '0' && number !== '.') {
        currentInput = '';
    }
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput === '') return;
    if (/[+\-*/]$/.test(currentInput)) {
        currentInput = currentInput.slice(0, -1);
    }
    currentInput += operator;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
    } catch (error) {
        currentInput = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput || '0';
}
