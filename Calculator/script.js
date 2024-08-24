let display = document.getElementById('display');
let historyList = document.getElementById('history-list');

function clearEntry() {
    display.innerText = '0';
}

function clearDisplay() {
    display.innerText = '0';
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1) || '0';
}

function appendNumber(number) {
    if (display.innerText === '0') {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function appendOperator(operator) {
    display.innerText += operator;
}

function calculateResult() {
    try {
        let result = eval(display.innerText.replace('×', '*').replace('÷', '/'));
        addToHistory(display.innerText + ' = ' + result);
        display.innerText = result;
    } catch {
        display.innerText = 'Error';
    }
}

function addToHistory(entry) {
    let li = document.createElement('li');
    li.innerText = entry;
    historyList.appendChild(li);
}
