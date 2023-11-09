/*PESUDOCODE 
-Get the value in the income input field
-take this value and figures out which function needs to be applied on it
-code a function for calculating the national insurance - EXTRA
-code function to break down salary into take home pay and tax by week month and year - EXTRA, grid?
expand the container so that the result is displayed
create an event listener for the submit button so that all these functions are triggered when it is pressed
take this value and add it to the html 
*/


// var timePeriod = document.getElementsByName("time-period")


// var pensionOption = document.getElementsByName("pension-option")

// var pensionContribution = document.getElementById("pension-contribution")

// var studentLoan = document.getElementsByName("student-loan-option")

// var studentLoanContribution = document.getElementById("student-loan-contribution")
var income = document.getElementById("income")

var income;
var takeHomePay;

function noIncomeTax (){
    if(income <= 12570);{
    console.log("You have no income tax to pay")}
}
// noIncomeTax();

// income = 30000

function lowerRateIncomeTax(){
    let taxableIncome = income - 12751;
    let totalTax = taxableIncome * 0.2;
    let takeHomePay = income - totalTax;
    console.log("Your total income tax to pay is £ " + totalTax);
    console.log("Your total take home pay is £ " + takeHomePay);
}

// lowerRateIncomeTax()

 income = 51000;

function higherRateIncomeTax(){
    var lowerTax = (50270 - 12571)* 0.2;
    var higherTax = (income - 50271)* 0.4;
    var totalTax = lowerTax + higherTax;
    console.log("Your total income tax to pay is £ " + totalTax);
    let takeHomePay = income - totalTax;
    console.log("Your total take home pay is £ " + takeHomePay)
}

higherRateIncomeTax()

function highestRateIncomeTax(){
    var lowerTax = (50270 - 12571)* 0.2;
    var higherTax = (125140 - 50271)* 0.4;
    var highestTax = (income - 125141)* 0.45;
    var totalTax = lowerTax + higherTax + highestTax;
    console.log("Your total income tax to pay is £ " + totalTax);
    let takeHomePay = income - totalTax;
    console.log("Your total take home pay is £ " + takeHomePay)
}

//  highestRateIncomeTax()


    








