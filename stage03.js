const input = require('sync-input');

//----------------------------------------------------GLOBAL VARIABLES -------------------------------------------------------
let initialCurrency = '';
let finalCurrency = '';
let userAmount = 0;
let userDollars = 0;
let userResult = 0;
const validCurrencies = ['JPY', 'EUR', 'RUB', 'USD', 'GBP'];

//----------------------------------------------------FUNCTIONS---------------------------------------------------------------
function greet () {
    console.log(
`Welcome to Currency Converter!\n1 USD equals 1 USD\n1 USD equals 113.5 JPY
1 USD equals 0.89 EUR\n1 USD equals 74.36 RUB\n1 USD equals 0.75 GBP
What do you want to convert?`);
}

function validateString(inputString) {
    if (typeof inputString === "string")
        return true;
    
    return false;
}

function validateCurrency(currency) {
    if (validCurrencies.includes(currency))
        return true;
    
    return false;
}

function inputInitial() {
    console.log('From:  ');
    let localInitial = input().toUpperCase();

    if (validateString(localInitial) && validateCurrency(localInitial)) {
        initialCurrency = localInitial;
        return true
    }
        

    return false;
    
}

function inputFinal() {
    console.log('To:  ');
    let localFinal = input().toUpperCase();

    if (validateString(localFinal) && validateCurrency(localFinal)) {
        finalCurrency = localFinal;
        return true;
    }
        

    return false;
    
}

function isNumber(amount) {
    return Number.isNaN(Number(amount)) === false;
}

function isValid(amount) {
    return amount >= 1;
}


function inputAmount() {
    console.log('Amount: ');
    let localAmount = input();

    return localAmount;
}

function convertToFinal(userCurrency, amount) {
    let convertedAmount = 0;
    switch(userCurrency) {
        case 'JPY':
            convertedAmount = amount * 113.5;
            break;
        case 'EUR':
            convertedAmount = amount * 0.89;
            break;
        case 'RUB':
            convertedAmount = amount * 74.36;
            break;
        case 'USD':
            convertedAmount = amount * 1;
            break;
        case 'GBP':
            convertedAmount = amount * 0.75;
            break;
        default:
            break;
    }

    return convertedAmount;
}   

function convertToDollar(userCurrency, amount) {
    let convertedAmount = 0;
    switch(userCurrency) {
        case 'JPY':
            convertedAmount = amount / 113.5;
            break;
        case 'EUR':
            convertedAmount = amount / 0.89;
            break;
        case 'RUB':
            convertedAmount = amount / 74.36;
            break;
        case 'USD':
            convertedAmount = amount / 1;
            break;
        case 'GBP':
            convertedAmount = amount / 0.75;
            break;
        default:
            break;
    }

    return convertedAmount;
} 

function printResult() {
    console.log(`Result: ${userAmount} ${initialCurrency} equals ${userResult.toFixed(4)} ${finalCurrency}`);

}

// -------------------------------------------------- MAIN FLOW ------------------------------------------------------- 

greet();
if (inputInitial()) {
    if(inputFinal()) {
        userInput = inputAmount();
        if (!isNumber(userInput)) {
            console.log('The amount has to be a number');
        }
        else if (!isValid (userInput)) {
            console.log('The amount cannot be less than 1');
        }
        else if (isNumber(userInput) && isValid(userInput)) {
            // converting to dollar
            userAmount = userInput;
            userDollars = convertToDollar(initialCurrency, userAmount);
            // convert to final 
            userResult = convertToFinal(finalCurrency, userDollars);


            // PRINT RESULT

            printResult();
            

        }
    }
    else {
        console.log('Unkown currency');
    }
}
else {
    console.log('Uknown currency');
}