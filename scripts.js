// Operator functions 
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

// Array that stores number and operator data to calculate
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

let prevValue = operatorNums[0];
let currentValue = operatorNums[2];
let newValue = String(prevValue) + String(currentValue);

// Number displayed on the screen.
const outputDisplay = document.querySelector('#output');

// Button selection
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

// Operator selection
const buttonOperator = document.querySelector('.buttonOperator');


// Updates display based on number "clicked"
// When number is click:
// If the divide operator was previouslt clicked and stored, and if the second number value has not been 
// stored yet:
// -Display 'error'
// -Wait 1.5 seconds and then:
// --Clear the display
// --Clear the storage array
// If any other operator was previously clicked and stored, and if the second number value has not 
// been stored yet:
// -If the second number value has not been stored yet:
// --Display equals the number clicked
// --Store number clicked into the array
// --Set variable to number clicked and stored
// -Else:
// --Add number clicked to variable via concatenation
// --Remove old second number value from storage array and replace with new concatenated number
// --Update variable with new number stored
// Else:
// -Add number clicked to the display
// Remove all operator classes
button0.addEventListener('click', function() {
    if (operatorNums[1] === 'divide' && operatorNums[2] === undefined) {
        outputDisplay.innerText = "I do not want to calculate that!"
        setTimeout(() => {
            outputDisplay.innerText = '';
            operatorNums.pop();
            operatorNums.pop();
            operatorNums.pop();;
        }, 1500);
    }
    else if (operatorNums[1] === 'multiply' || operatorNums[1] === 'subtract' 
            || operatorNums[1] === 'add') {
        if (operatorNums[2] == undefined) {
            outputDisplay.innerText = 0;
            operatorNums.push(parseFloat(outputDisplay.innerText));
            currentValue = String(operatorNums[2]);
        } else {
            outputDisplay.innerText = currentValue + '0';
            operatorNums.splice(2, 1, parseFloat(outputDisplay.innerText));
            currentValue = String(operatorNums[2]);
        }
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
    if (operatorNums[1] === 'divide' && operatorNums[2] === undefined) {
        outputDisplay.innerText = "I do not want to calculate that!"
        setTimeout(() => {
            outputDisplay.innerText = '';
            operatorNums.pop();
            operatorNums.pop();
            operatorNums.pop();;
        }, 1500);
    }
    else if (operatorNums[1] === 'multiply' || operatorNums[1] === 'subtract' 
            || operatorNums[1] === 'add') {
        if (operatorNums[2] == undefined) {
            outputDisplay.innerText = 0;
            operatorNums.push(parseFloat(outputDisplay.innerText));
            currentValue = String(operatorNums[2]);
        } else {
            outputDisplay.innerText = currentValue + '0';
            operatorNums.splice(2, 1, parseFloat(outputDisplay.innerText));
            currentValue = String(operatorNums[2]);
        }
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
    if (operatorNums[1] === 'divide' || operatorNums[1] === 'multiply' 
    || operatorNums[1] === 'subtract' || operatorNums[1] === 'add') {
        if (operatorNums[2] == undefined) {
            outputDisplay.innerText = 1;
            operatorNums.push(parseFloat(outputDisplay.innerText));
            currentValue = String(operatorNums[2]);
        } else {
            outputDisplay.innerText = currentValue + '1';
            operatorNums.splice(2, 1, parseFloat(outputDisplay.innerText));
            currentValue = String(operatorNums[2]);
        }
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
    if (operatorNums[1] === 'divide' || operatorNums[1] === 'multiply' 
    || operatorNums[1] === 'subtract' || operatorNums[1] === 'add') {
        if (operatorNums[2] == undefined) {
            outputDisplay.innerText = 2;
            operatorNums.push(parseFloat(outputDisplay.innerText));
            currentValue = String(operatorNums[2]);
        } else {
            outputDisplay.innerText = currentValue + '2';
            operatorNums.splice(2, 1, parseFloat(outputDisplay.innerText));
            currentValue = String(operatorNums[2]);
        }
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
    if (operatorNums[1] === 'divide' || operatorNums[1] === 'multiply' 
    || operatorNums[1] === 'subtract' || operatorNums[1] === 'add') {
        if (operatorNums[2] == undefined) {
            outputDisplay.innerText = 3;
            operatorNums.push(parseFloat(outputDisplay.innerText));
            currentValue = String(operatorNums[2]);
        } else {
            outputDisplay.innerText = currentValue + '3';
            operatorNums.splice(2, 1, parseFloat(outputDisplay.innerText));
            currentValue = String(operatorNums[2]);
        }
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
    if (operatorNums[1] === 'divide' || operatorNums[1] === 'multiply' 
    || operatorNums[1] === 'subtract' || operatorNums[1] === 'add') {
        if (operatorNums[2] == undefined) {
            outputDisplay.innerText = 4;
            operatorNums.push(parseFloat(outputDisplay.innerText));
            currentValue = String(operatorNums[2]);
        } else {
            outputDisplay.innerText = currentValue + '4';
            operatorNums.splice(2, 1, parseFloat(outputDisplay.innerText));
            currentValue = String(operatorNums[2]);
        }
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
    if (operatorNums[1] === 'divide' || operatorNums[1] === 'multiply' 
    || operatorNums[1] === 'subtract' || operatorNums[1] === 'add') {
        if (operatorNums[2] == undefined) {
            outputDisplay.innerText = 5;
            operatorNums.push(parseFloat(outputDisplay.innerText));
            currentValue = String(operatorNums[2]);
        } else {
            outputDisplay.innerText = currentValue + '5';
            operatorNums.splice(2, 1, parseFloat(outputDisplay.innerText));
            currentValue = String(operatorNums[2]);
        }
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
    if (operatorNums[1] === 'divide' || operatorNums[1] === 'multiply' 
    || operatorNums[1] === 'subtract' || operatorNums[1] === 'add') {
        if (operatorNums[2] == undefined) {
            outputDisplay.innerText = 6;
            operatorNums.push(parseFloat(outputDisplay.innerText));
            currentValue = String(operatorNums[2]);
        } else {
            outputDisplay.innerText = currentValue + '6';
            operatorNums.splice(2, 1, parseFloat(outputDisplay.innerText));
            currentValue = String(operatorNums[2]);
        }
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
    if (operatorNums[1] === 'divide' || operatorNums[1] === 'multiply' 
    || operatorNums[1] === 'subtract' || operatorNums[1] === 'add') {
        if (operatorNums[2] == undefined) {
            outputDisplay.innerText = 7;
            operatorNums.push(parseFloat(outputDisplay.innerText));
            currentValue = String(operatorNums[2]);
        } else {
            outputDisplay.innerText = currentValue + '7';
            operatorNums.splice(2, 1, parseFloat(outputDisplay.innerText));
            currentValue = String(operatorNums[2]);
        }
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
    if (operatorNums[1] === 'divide' || operatorNums[1] === 'multiply' 
    || operatorNums[1] === 'subtract' || operatorNums[1] === 'add') {
        if (operatorNums[2] == undefined) {
            outputDisplay.innerText = 8;
            operatorNums.push(parseFloat(outputDisplay.innerText));
            currentValue = String(operatorNums[2]);
        } else {
            outputDisplay.innerText = currentValue + '8';
            operatorNums.splice(2, 1, parseFloat(outputDisplay.innerText));
            currentValue = String(operatorNums[2]);
        }
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
    if (operatorNums[1] === 'divide' || operatorNums[1] === 'multiply' 
    || operatorNums[1] === 'subtract' || operatorNums[1] === 'add') {
        if (operatorNums[2] == undefined) {
            outputDisplay.innerText = 9;
            operatorNums.push(parseFloat(outputDisplay.innerText));
            currentValue = String(operatorNums[2]);
        } else {
            outputDisplay.innerText = currentValue + '9';
            operatorNums.splice(2, 1, parseFloat(outputDisplay.innerText));
            currentValue = String(operatorNums[2]);
        }
    } 
    else {
        outputDisplay.innerText += 9;
    }
    buttonDivide.classList.remove('buttonOperator');
    buttonMultiply.classList.remove('buttonOperator');
    buttonSubtract.classList.remove('buttonOperator');
    buttonAdd.classList.remove('buttonOperator');
})

// Decimal button click event
buttonDec.addEventListener('click', function() {
    if (operatorNums[1] === 'divide' || operatorNums[1] === 'multiply' 
    || operatorNums[1] === 'subtract' || operatorNums[1] === 'add') {
        if (operatorNums[2] == undefined) {
            outputDisplay.innerText = '.';
            operatorNums.push(outputDisplay.innerText);
            currentValue = String(operatorNums[2]);
        } else {
            outputDisplay.innerText = currentValue + '.';
            operatorNums.splice(2, 1, outputDisplay.innerText);
            currentValue = String(operatorNums[2]);
        }
    } 
    else {
    outputDisplay.innerText += '.';
    }
    buttonDivide.classList.remove('buttonOperator');
    buttonMultiply.classList.remove('buttonOperator');
    buttonSubtract.classList.remove('buttonOperator');
    buttonAdd.classList.remove('buttonOperator');
})
// Clears display and stored data
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

// Operator button click events
// When clicked:
// If second number value hasn't been stored yet:
// -Add it number to storage array
// -Add class that highlights operator button
// -Add operator to storage array
// If second number value has been stored:
// -Initiate operate function and calculate the operation
// -Delete the data stored in the array
// -Add the answer as the first number value in the storage array
// -Add operator to storage array
// -Add class that highlights operator button
// If the number doesn't fit on the display
// -Show an error on the display

buttonDivide.addEventListener('click', function() {
    if (operatorNums[2] == undefined) {
        operatorNums.push(parseFloat(outputDisplay.innerText));
        buttonDivide.classList.add('buttonOperator')
        operatorNums.push('divide');
        }
    if (operatorNums[2] !== undefined) {
        operate(operatorNums[1], operatorNums[0], operatorNums[2]);
        operatorNums.pop();
        operatorNums.pop();
        operatorNums.pop();
        operatorNums.pop();
        operatorNums.push(parseFloat(outputDisplay.innerText));
        operatorNums.push('divide');
        buttonDivide.classList.add('buttonOperator');
    }
    if (parseInt(outputDisplay.innerText) > 9999999999999  
        || parseInt(outputDisplay.innerText) < 0.000000000001) {
        outputDisplay.innerText = "Error!"
        }
})
buttonMultiply.addEventListener('click', function() {
    if (operatorNums[2] == undefined) {
        operatorNums.push(parseFloat(outputDisplay.innerText));
        buttonMultiply.classList.add('buttonOperator')
        operatorNums.push('multiply');
        }
    if (operatorNums[2] !== undefined) {
        operate(operatorNums[1], operatorNums[0], operatorNums[2]);
        operatorNums.pop();
        operatorNums.pop();
        operatorNums.pop();
        operatorNums.pop();
        operatorNums.push(parseFloat(outputDisplay.innerText));
        operatorNums.push('multiply');
        buttonMultiply.classList.add('buttonOperator');
    }
    if (parseInt(outputDisplay.innerText) > 9999999999999  
        || parseInt(outputDisplay.innerText) < 0.000000000001) {
        outputDisplay.innerText = "Error!"
        }
})
buttonSubtract.addEventListener('click', function() {
    if (operatorNums[2] == undefined) {
        operatorNums.push(parseFloat(outputDisplay.innerText));
        buttonSubtract.classList.add('buttonOperator')
        operatorNums.push('subtract');
        }
    if (operatorNums[2] !== undefined) {
        operate(operatorNums[1], operatorNums[0], operatorNums[2]);
        operatorNums.pop();
        operatorNums.pop();
        operatorNums.pop();
        operatorNums.pop();
        operatorNums.push(parseFloat(outputDisplay.innerText));
        operatorNums.push('subtract');
        buttonSubtract.classList.add('buttonOperator');
    }
    if (parseInt(outputDisplay.innerText) > 9999999999999  
        || parseInt(outputDisplay.innerText) < 0.000000000001) {
        outputDisplay.innerText = "Error!"
        }
})
buttonAdd.addEventListener('click', function() {
    if (operatorNums[2] == undefined) {
    operatorNums.push(parseFloat(outputDisplay.innerText));
    buttonAdd.classList.add('buttonOperator');
    operatorNums.push('add');
    }
    if (operatorNums[2] !== undefined) {
        operate(operatorNums[1], operatorNums[0], operatorNums[2]);
        operatorNums.pop();
        operatorNums.pop();
        operatorNums.pop();
        operatorNums.pop();
        operatorNums.push(parseFloat(outputDisplay.innerText));
        operatorNums.push('add');
        buttonAdd.classList.add('buttonOperator');
    }
    if (parseInt(outputDisplay.innerText) > 9999999999999  
        || parseInt(outputDisplay.innerText) < 0.000000000001) {
        outputDisplay.innerText = "Error!"
        }
})
buttonEquals.addEventListener('click', function() { 
    outputDisplay.innerText = '';
    operate(operatorNums[1], operatorNums[0], operatorNums[2]);
    if (parseInt(outputDisplay.innerText) > 9999999999999  
        || parseInt(outputDisplay.innerText) < 0.000000000001) {
        outputDisplay.innerText = "Error!"
        }
})

// Changes positive number to a negative number and vice versa
signFlip.addEventListener('click', function() {
    outputDisplay.innerText = (outputDisplay.innerText * -1)
})

// Changes displayed number into a percentage
percent.addEventListener('click', function() {
    outputDisplay.innerText = (outputDisplay.innerText * 0.01)
})