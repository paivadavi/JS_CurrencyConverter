const input = require('sync-input');

//------------------------------------------------------------------------------------------------------------

// GLOBAL VARIABLES
let userCurrency = '';
let userAmount = 0;
let validCurrencies = ['JPY', 'EUR', 'RUB', 'USD', 'GBP'];


//-----------------------------------------------------------------------------------------------------------


function greet() {
    console.log(`
Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP
I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP
Type the currency you wish to convert: USD`);
}

function inputCurrency() {
    console.log('To: ');
    userCurrency = input();

    if (typeof userCurrency === "string")
        userCurrency = userCurrency.toUpperCase();

    return validCurrencies.includes(userCurrency);
}

function inputAmount() {
    console.log('Amount: ');
    let amount = input();
    
    return amount;
}

function isNumber(amount) {
    return Number.isNaN(Number(amount)) === false;
}

function isValid(amount) {
    return amount >= 1;
}

function convert(currency, amount) {
    let convertedAmount = 0;
    switch(currency) {
        case 'JPY':
            convertedAmount = userAmount * 113.5;
            break;
        case 'EUR':
            convertedAmount = userAmount * 0.89;
            break;
        case 'RUB':
            convertedAmount = userAmount * 74.36;
            break;
        case 'USD':
            convertedAmount = userAmount * 1;
            break;
        case 'GBP':
            convertedAmount = userAmount * 0.75;
            break;
        default:
            break;
    }

    return convertedAmount;

}

//--------------------------------------------------------------------------------------------------------



greet();
if (inputCurrency()) {
    userAmount = inputAmount();
    if(isNumber(userAmount)) {
        if(isValid(userAmount)){
            console.log(convert(userCurrency, userAmount));
        }
        else {
            console.log('The amount cannot be less than 1');
        }
    } else {
        console.log('The amount has to be a number');
    }
} else {
    console.log('Unknown currency');
}

