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

const operatorNums = [];

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
    buttonDivide.classList.remove('buttonOperator');
    buttonMultiply.classList.remove('buttonOperator');
    buttonSubtract.classList.remove('buttonOperator');
    buttonAdd.classList.remove('buttonOperator');
})
button1.addEventListener('click', function() {
    outputDisplay.innerText += 1;
    buttonDivide.classList.remove('buttonOperator');
    buttonMultiply.classList.remove('buttonOperator');
    buttonSubtract.classList.remove('buttonOperator');
    buttonAdd.classList.remove('buttonOperator');
})
button2.addEventListener('click', function() {
    outputDisplay.innerText += 2;
    buttonDivide.classList.remove('buttonOperator');
    buttonMultiply.classList.remove('buttonOperator');
    buttonSubtract.classList.remove('buttonOperator');
    buttonAdd.classList.remove('buttonOperator');
})
button3.addEventListener('click', function() {
    outputDisplay.innerText += 3;
    buttonDivide.classList.remove('buttonOperator');
    buttonMultiply.classList.remove('buttonOperator');
    buttonSubtract.classList.remove('buttonOperator');
    buttonAdd.classList.remove('buttonOperator');
})
button4.addEventListener('click', function() {
    outputDisplay.innerText += 4;
    buttonDivide.classList.remove('buttonOperator');
    buttonMultiply.classList.remove('buttonOperator');
    buttonSubtract.classList.remove('buttonOperator');
    buttonAdd.classList.remove('buttonOperator');
})
button5.addEventListener('click', function() {
    outputDisplay.innerText += 5;
    buttonDivide.classList.remove('buttonOperator');
    buttonMultiply.classList.remove('buttonOperator');
    buttonSubtract.classList.remove('buttonOperator');
    buttonAdd.classList.remove('buttonOperator');
})
button6.addEventListener('click', function() {
    outputDisplay.innerText += 6;
    buttonDivide.classList.remove('buttonOperator');
    buttonMultiply.classList.remove('buttonOperator');
    buttonSubtract.classList.remove('buttonOperator');
    buttonAdd.classList.remove('buttonOperator');
})
button7.addEventListener('click', function() {
    outputDisplay.innerText += 7;
    buttonDivide.classList.remove('buttonOperator');
    buttonMultiply.classList.remove('buttonOperator');
    buttonSubtract.classList.remove('buttonOperator');
    buttonAdd.classList.remove('buttonOperator');
})
button8.addEventListener('click', function() {
    outputDisplay.innerText += 8;
    buttonDivide.classList.remove('buttonOperator');
    buttonMultiply.classList.remove('buttonOperator');
    buttonSubtract.classList.remove('buttonOperator');
    buttonAdd.classList.remove('buttonOperator');
})
button9.addEventListener('click', function() {
    outputDisplay.innerText += 9;
    buttonDivide.classList.remove('buttonOperator');
    buttonMultiply.classList.remove('buttonOperator');
    buttonSubtract.classList.remove('buttonOperator');
    buttonAdd.classList.remove('buttonOperator');
})
buttonDec.addEventListener('click', function() {
    outputDisplay.innerText += '.';
    buttonDivide.classList.remove('buttonOperator');
    buttonMultiply.classList.remove('buttonOperator');
    buttonSubtract.classList.remove('buttonOperator');
    buttonAdd.classList.remove('buttonOperator');
})
buttonC.addEventListener('click', function() {
    outputDisplay.innerText = '';
    buttonDivide.classList.remove('buttonOperator');
    buttonMultiply.classList.remove('buttonOperator');
    buttonSubtract.classList.remove('buttonOperator');
    buttonAdd.classList.remove('buttonOperator');
})
buttonDivide.addEventListener('click', function() {
    operatorNums.push(parseInt(outputDisplay.innerText));
    outputDisplay.innerText = ' ';
    buttonDivide.classList.add('buttonOperator');
})
buttonMultiply.addEventListener('click', function() {
    operatorNums.push(parseInt(outputDisplay.innerText));
    outputDisplay.innerText = ' ';
    buttonMultiply.classList.add('buttonOperator');
})
buttonSubtract.addEventListener('click', function() {
    operatorNums.push(parseInt(outputDisplay.innerText));
    outputDisplay.innerText = ' ';
    buttonSubtract.classList.add('buttonOperator');
})
buttonAdd.addEventListener('click', function() {
    operatorNums.push(parseInt(outputDisplay.innerText));
    outputDisplay.innerText = ' ';
    buttonAdd.classList.add('buttonOperator');
})
buttonEquals.addEventListener('click', function() {
    operatorNums.push(parseInt(outputDisplay.innerText));
    outputDisplay.innerText = '';
})

// const firstNum = () => {
//     if (outputDisplay == '÷') {
//         console.log('yo!')
//     }
// }

// const firstNum = operatorNums[0];

// const secondNum = operatorNums[1];

// When operator is clicked:
// Store numeric value*
// Delete number from display*
// Apply operator sign to display*
// Store second numeric value*
// Apply second number to the display*
// Next step: Equal sign implimentation