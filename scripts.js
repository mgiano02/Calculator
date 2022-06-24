const add = (x,y) => {
    console.log(x + y);
}

const subtract = (x, y) => {
    console.log(x - y);
}

const multiply = (x,y) => {
    console.log(x * y);
}

const divide = (x,y) => {
    console.log(x / y);
}


// Calls one of the above functions using the given numbers based on the operator
function operate (operator,num1,num2) {
    if (operator === add) {
        return add(num1, num2)
    }
    if (operator === subtract) {
        return subtract(num1, num2)
    }
    if (operator === multiply) {
        return multiply(num1, num2)
    }
    if (operator === divide) {
        return divide(num1, num2)
    }
}

const outputDisplay = document.querySelector('#output');
// Consider making a loop with an array to create variables
const button0 = document.querySelector('#button0');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const button4 = document.querySelector('#button4');
const button5 = document.querySelector('#button5');
const button6 = document.querySelector('#button6');
const button7 = document.querySelector('#button7');
const button8 = document.querySelector('#button8');
const button9 = document.querySelector('#button9');
const buttonDec = document.querySelector('#buttonDec');
const buttonC = document.querySelector('#buttonC');
const buttonDivide = document.querySelector('#buttonDivide');
const buttonMultiply = document.querySelector('#buttonMultiply');
const buttonSubtract = document.querySelector('#buttonSubtract');
const buttonAdd = document.querySelector('#buttonAdd');
const buttonEquals = document.querySelector('#buttonEquals');

// const buttons = [button0, button1, button2, button3, button4, button5, button6, button7, button8, button9]

// Updates display based on number "clicked"
// Can create a function to combine all event listeners into one piece of code
button0.addEventListener('click', function() {
    outputDisplay.innerText += 0;
})
button1.addEventListener('click', function() {
    outputDisplay.innerText += 1;
})
button2.addEventListener('click', function() {
    outputDisplay.innerText += 2;
})
button3.addEventListener('click', function() {
    outputDisplay.innerText += 3;
})
button4.addEventListener('click', function() {
    outputDisplay.innerText += 4;
})
button5.addEventListener('click', function() {
    outputDisplay.innerText += 5;
})
button6.addEventListener('click', function() {
    outputDisplay.innerText += 6;
})
button7.addEventListener('click', function() {
    outputDisplay.innerText += 7;
})
button8.addEventListener('click', function() {
    outputDisplay.innerText += 8;
})
button9.addEventListener('click', function() {
    outputDisplay.innerText += 9;
})
buttonDec.addEventListener('click', function() {
    outputDisplay.innerText += '.';
})
buttonC.addEventListener('click', function() {
    outputDisplay.innerText = '';
})
buttonDivide.addEventListener('click', function() {
    outputDisplay.innerText += '÷';
})
buttonMultiply.addEventListener('click', function() {
    outputDisplay.innerText += '×';
})
buttonSubtract.addEventListener('click', function() {
    outputDisplay.innerText += '−';
})
buttonAdd.addEventListener('click', function() {
    outputDisplay.innerText += '+';
})
// buttonEquals.addEventListener('click', function() {
//     outputDisplay.innerText = '';
// })