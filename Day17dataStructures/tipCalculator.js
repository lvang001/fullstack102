//variable for the amount of a bill
var billAmount = 550.50;

//function calls saved to variables
var tipAmount = calculateTip(billAmount);
var totalAmount = getBillTotal(tipAmount);

//round to 2 decimal places
let roundTipAmount = tipAmount.toFixed(2);
let roundTotalAmount = totalAmount.toFixed(2);

//printing results to a console
console.log("The amount of tip is " + roundTipAmount);
console.log("The total bill amount is " + roundTotalAmount);
// console.log(tipAmount)
// console.log(totalAmount)

//function to return tip
function calculateTip(abc) {

    return abc * .15;
}

//function to return total bill with tip function called
function getBillTotal (total) {

    return billAmount + calculateTip(billAmount);
}

