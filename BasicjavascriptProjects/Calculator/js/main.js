//creats an object to keep track of values
const calculator = {
    display_value: '0', //this shows 0 on the screen
    first_operand: null, //this will hold the first operand for any expression we set it to null for now
    wait_second_operand: false, //this checks to see if the user has put in a second value
    operator: null, //this holds the operator
};

//this modifies the value each time a button is clicked
function inputdigit(digit) {
    const {display_value, wait_second_operand } = calculator;
    if (wait_second_operand ===true) { //this checks to see if there is a second operand and then displays the value of the clicked on key
        calculator.display_value = digit;
        calculator.wait_second_operand = false;
    } else { //this overwrites displayvalue if the current value is 0 otherwise it adds onto it
        calculator.display_value = display_value ==='0' ? digit : display_value + digit;
    }
}

//this handles the decimal points
function input_decimal(dot) {
    if (calculator.wait_second_operand ===true) return 
    if (!calculator.display_value.includes(dot)) { //this makes sure that accidental clicking of the deciaml point doesn't cause bugs
        calculator.display_value += dot; //says that if display value has no decimal that we want to add a decimal
    }
}

//this section is for operators
function handle_operator(nextoperator) {
    const {first_operand, display_value, operator} =calculator;
    const value_of_input = parseFloat(display_value); //when op key is pressed we convert the current number displayed on the screent o a number then store the recul in calculator.first if it doesn't exist already
    if (operator && calculator.wait_second_operand) { //checks if operator already exists id wait second is true then updates the operator and exist form the funciton
        calculator.operator = nextoperator;
        return;
    }
    if (first_operand == null) {
        calculator.first_operand = value_of_input;
    } else if (operator) {//checks if operator already exists
        const value_now = first_operand || 0;
        let result = preform_calculation[operator](value_now, value_of_input); //if operator exists property lookup is preformed or the operator in the preform calc object and the function matches the operator executed
        result = Number(result).toFixed (9); //this fixes the amount of numbers after a decimal to 9
        result = (result *1).toString(); //this removes trailing 0s
        calculator.display_value = parseFloat(result);
        calculator.first_operand = parseFloat(result);
    }
    calculator.wait_second_operand = true;
    calculator.operator = nextoperator;
}

const preform_calculation = {
    '/': (first_operand, second_operand) => first_operand/second_operand,
    '*': (first_operand, second_operand) => first_operand*second_operand,
    '+': (first_operand, second_operand) => first_operand+second_operand,
    '-': (first_operand, second_operand) => first_operand-second_operand,
    '=': (first_operand, second_operand) => first_operand=second_operand
};

function calculator_reset() {
    calculator.display_value = '0';
    calculator.first_operand = null;
    calculator.wait_second_operand = false;
    calculator.operator = null;
}

//this function updates the calc screen with the contents of display value
function update_display() {
    const display = document.querySelector('.calculatorscreen'); //makes the calculator screen class target the input tag in html
    display.value = calculator.display_value;
}

update_display();
const keys = document.querySelector('.calculatorkeys'); //this section is for button clicks
keys.addEventListener('click', (event) => {
    const {target} = event; //the target variable is an object tht represents the element clicked
    if (!target.matches('button')) { //if the element clicked is not a button exit function
        return;
    }
    if (target.classList.contains('operator')) {
        handle_operator(target.value);
        update_display();
        return
    }
    if (target.classList.contains('decimal')) {
        input_decimal(target.value);
        update_display();
        return;
    }
    if (target.classList.contains('all-clear')) { //makes sure AC clears all input from cal screen
        calculator_reset();
        update_display();
        return;
    }
    inputdigit(target.value)
    update_display();
})
