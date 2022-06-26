const add = (x,y) => {
    outputDisplay.innerText = (Math.round(((x + y) + Number.EPSILON) * 100)/100);
}

const subtract = (x, y) => {
    outputDisplay.innerText = (Math.round(((x - y) + Number.EPSILON) * 100)/100);
}

const multiply = (x,y) => {
    outputDisplay.innerText = (Math.round(((x * y) + Number.EPSILON) * 100)/100);
}

const divide = (x,y) => {
    outputDisplay.innerText = (Math.round(((x / y) + Number.EPSILON) * 100)/100);
}

const operatorNums = [];

// Calls one of the above functions using the given numbers based on the operator
function operate (operator,num1,num2) {
    if (operator === 'add') {
        return add(num1, num2)
    }
    if (operator === 'subtract') {
        return subtract(num1, num2)
    }
    if (operator === 'multiply') {
        return multiply(num1, num2)
    }
    if (operator === 'divide') {
        return divide(num1, num2)
    }
    else {
        outputDisplay.innerText = 'Error!';
        operatorNums.pop();
        operatorNums.pop();
        operatorNums.pop();
        operatorNums.pop();
        operatorNums.pop();
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
const buttonSpace = document.querySelector('#bigBtn');
const signFlip = document.querySelector('#signFlip');
const percent = document.querySelector('#percent');


const buttonOperator = document.querySelector('.buttonOperator');

// const buttons = [button0, button1, button2, button3, button4, button5, button6, button7, button8, button9]

// Updates display based on number "clicked"
// Can create a function to combine all event listeners into one piece of code
button0.addEventListener('click', function() {
    if (operatorNums[1] === 'divide') {
        outputDisplay.innerText = 'I do not want to calculate that!';
        operatorNums.pop();
        operatorNums.pop();
        operatorNums.pop();
        setTimeout(() => outputDisplay.innerText = '',1500);
    } 
    else if (operatorNums[1] === 'multiply') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 0;
    }
    else if (operatorNums[1] === 'subtract') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 0;
    } 
    else if (operatorNums[1] === 'add') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 0;
    }
    else {
        outputDisplay.innerText += 0;
    }
    buttonDivide.classList.remove('buttonOperator');
    buttonMultiply.classList.remove('buttonOperator');
    buttonSubtract.classList.remove('buttonOperator');
    buttonAdd.classList.remove('buttonOperator');
})
buttonSpace.addEventListener('click', function() {
    if (operatorNums[1] === 'divide') {
        outputDisplay.innerText = 'I do not want to calculate that!';
        operatorNums.pop();
        operatorNums.pop();
        operatorNums.pop();
        setTimeout(() => outputDisplay.innerText = '',1500);
    } 
    else if (operatorNums[1] === 'multiply') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 0;
    }
    else if (operatorNums[1] === 'subtract') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 0;
    } 
    else if (operatorNums[1] === 'add') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 0;
    }
    else {
        outputDisplay.innerText += 0;
    }
    buttonDivide.classList.remove('buttonOperator');
    buttonMultiply.classList.remove('buttonOperator');
    buttonSubtract.classList.remove('buttonOperator');
    buttonAdd.classList.remove('buttonOperator');
})
button1.addEventListener('click', function() {
    if (operatorNums[1] === 'divide') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 1;
    } 
    else if (operatorNums[1] === 'multiply') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 1;
    }
    else if (operatorNums[1] === 'subtract') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 1;
    } 
    else if (operatorNums[1] === 'add') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 1;
    }
    else {
        outputDisplay.innerText += 1;
    }
    buttonDivide.classList.remove('buttonOperator');
    buttonMultiply.classList.remove('buttonOperator');
    buttonSubtract.classList.remove('buttonOperator');
    buttonAdd.classList.remove('buttonOperator');
})
button2.addEventListener('click', function() {
    if (operatorNums[1] === 'divide') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 2;
    } 
    else if (operatorNums[1] === 'multiply') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 2;
    }
    else if (operatorNums[1] === 'subtract') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 2;
    } 
    else if (operatorNums[1] === 'add') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 2;
    }
    else {
        outputDisplay.innerText += 2;
    }
    buttonDivide.classList.remove('buttonOperator');
    buttonMultiply.classList.remove('buttonOperator');
    buttonSubtract.classList.remove('buttonOperator');
    buttonAdd.classList.remove('buttonOperator');
})
button3.addEventListener('click', function() {
    if (operatorNums[1] === 'divide') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 3;
    } 
    else if (operatorNums[1] === 'multiply') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 3;
    }
    else if (operatorNums[1] === 'subtract') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 3;
    } 
    else if (operatorNums[1] === 'add') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 3;
    }
    else {
        outputDisplay.innerText += 3;
    }
    buttonDivide.classList.remove('buttonOperator');
    buttonMultiply.classList.remove('buttonOperator');
    buttonSubtract.classList.remove('buttonOperator');
    buttonAdd.classList.remove('buttonOperator');
})
button4.addEventListener('click', function() {
    if (operatorNums[1] === 'divide') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 4;
    } 
    else if (operatorNums[1] === 'multiply') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 4;
    }
    else if (operatorNums[1] === 'subtract') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 4;
    } 
    else if (operatorNums[1] === 'add') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 4;
    }
    else {
        outputDisplay.innerText += 4;
    }
    buttonDivide.classList.remove('buttonOperator');
    buttonMultiply.classList.remove('buttonOperator');
    buttonSubtract.classList.remove('buttonOperator');
    buttonAdd.classList.remove('buttonOperator');
})
button5.addEventListener('click', function() {
    if (operatorNums[1] === 'divide') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 5;
    } 
    else if (operatorNums[1] === 'multiply') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 5;
    }
    else if (operatorNums[1] === 'subtract') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 5;
    } 
    else if (operatorNums[1] === 'add') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 5;
    }
    else {
        outputDisplay.innerText += 5;
    }
    buttonDivide.classList.remove('buttonOperator');
    buttonMultiply.classList.remove('buttonOperator');
    buttonSubtract.classList.remove('buttonOperator');
    buttonAdd.classList.remove('buttonOperator');
})
button6.addEventListener('click', function() {
    if (operatorNums[1] === 'divide') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 6;
    } 
    else if (operatorNums[1] === 'multiply') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 6;
    }
    else if (operatorNums[1] === 'subtract') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 6;
    } 
    else if (operatorNums[1] === 'add') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 6;
    }
    else {
        outputDisplay.innerText += 6;
    }
    buttonDivide.classList.remove('buttonOperator');
    buttonMultiply.classList.remove('buttonOperator');
    buttonSubtract.classList.remove('buttonOperator');
    buttonAdd.classList.remove('buttonOperator');
})
button7.addEventListener('click', function() {
    if (operatorNums[1] === 'divide') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 7;
    } 
    else if (operatorNums[1] === 'multiply') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 7;
    }
    else if (operatorNums[1] === 'subtract') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 7;
    } 
    else if (operatorNums[1] === 'add') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 7;
    }
    else {
        outputDisplay.innerText += 7;
    }
    buttonDivide.classList.remove('buttonOperator');
    buttonMultiply.classList.remove('buttonOperator');
    buttonSubtract.classList.remove('buttonOperator');
    buttonAdd.classList.remove('buttonOperator');
})
button8.addEventListener('click', function() {
    if (operatorNums[1] === 'divide') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 8;
    } 
    else if (operatorNums[1] === 'multiply') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 8;
    }
    else if (operatorNums[1] === 'subtract') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 8;
    } 
    else if (operatorNums[1] === 'add') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 8;
    }
    else {
        outputDisplay.innerText += 8;
    }
    buttonDivide.classList.remove('buttonOperator');
    buttonMultiply.classList.remove('buttonOperator');
    buttonSubtract.classList.remove('buttonOperator');
    buttonAdd.classList.remove('buttonOperator');
})
button9.addEventListener('click', function() {
    // If operator is in storage array, delete display number and add a 9
    // Bug occurs when third storage array value is more than a single digit number
    if (operatorNums[1] === 'divide') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 9;
    } 
    else if (operatorNums[1] === 'multiply') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 9;
    }
    else if (operatorNums[1] === 'subtract') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 9;
    } 
    else if (operatorNums[1] === 'add') {
        outputDisplay.innerText = '';
        outputDisplay.innerText += 9;
    }
    else {
        outputDisplay.innerText += 9;
    }
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
    operatorNums.pop();
    operatorNums.pop();
    operatorNums.pop();
})
buttonDivide.addEventListener('click', function() {
    operatorNums.push(parseFloat(outputDisplay.innerText));
    outputDisplay.innerText = ' ';
    buttonDivide.classList.add('buttonOperator');
    operatorNums.push('divide');
    if (operatorNums[3] !== undefined) {
        operate(operatorNums[1], operatorNums[0], operatorNums[2]);
        operatorNums.pop();
        operatorNums.pop();
        operatorNums.pop();
        operatorNums.pop();
        operatorNums.push(parseFloat(outputDisplay.innerText));
        operatorNums.push('divide');
    }
})
buttonMultiply.addEventListener('click', function() {
    operatorNums.push(parseFloat(outputDisplay.innerText));
    outputDisplay.innerText = ' ';
    buttonMultiply.classList.add('buttonOperator');
    operatorNums.push('multiply');
    if (operatorNums[3] !== undefined) {
        operate(operatorNums[1], operatorNums[0], operatorNums[2]);
        operatorNums.pop();
        operatorNums.pop();
        operatorNums.pop();
        operatorNums.pop();
        operatorNums.push(parseFloat(outputDisplay.innerText));
        operatorNums.push('multiply');
    }
})
buttonSubtract.addEventListener('click', function() {
    operatorNums.push(parseFloat(outputDisplay.innerText));
    outputDisplay.innerText = ' ';
    buttonSubtract.classList.add('buttonOperator');
    operatorNums.push('subtract');
    if (operatorNums[3] !== undefined) {
        operate(operatorNums[1], operatorNums[0], operatorNums[2]);
        operatorNums.pop();
        operatorNums.pop();
        operatorNums.pop();
        operatorNums.pop();
        operatorNums.push(parseFloat(outputDisplay.innerText));
        operatorNums.push('subtract');
    }
})
buttonAdd.addEventListener('click', function() {
    operatorNums.push(parseFloat(outputDisplay.innerText));
    outputDisplay.innerText = ' ';
    buttonAdd.classList.add('buttonOperator');
    operatorNums.push('add');
    if (operatorNums[3] !== undefined) {
        operate(operatorNums[1], operatorNums[0], operatorNums[2]);
        operatorNums.pop();
        operatorNums.pop();
        operatorNums.pop();
        operatorNums.pop();
        operatorNums.push(parseFloat(outputDisplay.innerText));
        operatorNums.push('add');
    }
})
buttonEquals.addEventListener('click', function() { 
    operatorNums.push(parseFloat(outputDisplay.innerText));
    outputDisplay.innerText = '';
    operate(operatorNums[1], operatorNums[0], operatorNums[2]);
})

signFlip.addEventListener('click', function() {
    outputDisplay.innerText = (outputDisplay.innerText * -1)
})

percent.addEventListener('click', function() {
    outputDisplay.innerText = (outputDisplay.innerText * 0.01)
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

// When Equal sign is clicked:
// Store second numeric value*
// Delete number from display*
// Initiate operate function with 2 numeric values and operator*
// Display result of operate function on display*
// Delete stored values (on hold)
// Store result number as first value (on hold)

// Using several operators before clicking the equal sign
// When clicking second operator:
// Store second numeric value in third slot of data*
// Initiate operate function and calc first 3 values*
// Display result of operate function on display*
// Delete previously stored data*
// Store result in first slot of data*
// Store selected operator in second slot of data*
// Ensure this process continues if another operator is clicked*

// Update comments
// 0 button*
// Other buttons*
// Operator + double digit bug
// Try to break it and fix those bugs
// Make it look nice