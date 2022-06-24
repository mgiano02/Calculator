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