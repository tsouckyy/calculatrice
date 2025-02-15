let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let previousInput = "";

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(op) {
    if (currentInput === "") return;
    if (previousInput !== "") {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

function appendDecimal() {
    if (currentInput.includes(".")) return;
    currentInput += ".";
    display.value = currentInput;
}

function calculate() {
    if (previousInput === "" || currentInput === "") return;
    let result;
    switch (operator) {
        case "+":
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case "-":
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case "*":
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case "/":
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
        default:
            return;
    }
    display.value = result;
    previousInput = result;
    currentInput = "";
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = "";
    display.value = "";
}

// Attacher un écouteur d'événement au bouton "Secret Button"
document.getElementById('secret-button').addEventListener('click', function() {
    // Ouvre la page secret.html dans un nouvel onglet
    window.open('secret.html', '_blank');
});
