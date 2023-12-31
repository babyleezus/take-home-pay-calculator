const submit = document.getElementById('submit-btn')
var income = document.getElementById("income")

var income;
var takeHomePay;
var NIContribution;


    
function noIncomeTax (){
    if(income <= 12570);{
    console.log("You have no income tax to pay")}
}

function lowerRateIncomeTax(){
    let taxableIncome = income - 12751;
    let totalTax = taxableIncome * 0.2;
    let takeHomePay = income - totalTax;
    console.log("Your total income tax to pay is £ " + totalTax);
    console.log("Your total take home pay is £ " + takeHomePay);
}

function higherRateIncomeTax(){
    var lowerTax = (50270 - 12571)* 0.2;
    var higherTax = (income - 50271)* 0.4;
    var totalTax = lowerTax + higherTax;
    console.log("Your total income tax to pay is £ " + totalTax);
    let takeHomePay = income - totalTax;
    console.log("Your total take home pay is £ " + takeHomePay)
}

function highestRateIncomeTax(){
    var lowerTax = (50270 - 12571)* 0.2;
    var higherTax = (125140 - 50271)* 0.4;
    var highestTax = (income - 125141)* 0.45;
    var totalTax = lowerTax + higherTax + highestTax;
    console.log("Your total income tax to pay is £ " + totalTax);
    let takeHomePay = income - totalTax;
    console.log("Your total take home pay is £ " + takeHomePay)
}

switch (income){
    case income <= 12570:
    noIncomeTax()
    break;
    case income >= 12570 && < 50270:
    lowerRateIncomeTax()
    break;
    case income >= 50271 && < 125140:
    higherRateIncomeTax()
    break;
    case income >= 125141:
    highestRateIncomeTax
    break;
}









//  highestRateIncomeTax()


    








