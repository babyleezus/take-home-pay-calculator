let submit = document.getElementById('submit-btn')
let income = document.getElementById("income")


var netSalary;
var taxToPay;
var NIContribution;

submit.addEventListener('click', function(){
    checkPay();

})

function checkPay(income) {
    switch (income){
        case income <= 12570:
        noIncomeTax()
        break;
        case income >= 12571 && income <= 50270:
        lowerRateIncomeTax()
        break;
        case income >= 50271 && income <= 125140:
        higherRateIncomeTax()
        break;
        case income >= 125141:
        highestRateIncomeTax()
        break;
    }
}
    
function noIncomeTax (){
    if(income <= 12570);{
    console.log("You have no income tax or national insurance to pay")}
}

function lowerRateIncomeTax(){
    let taxableIncome = income - 12751;
    let nationalInsurance = taxableIncome * 0.12
    let totalTax = taxableIncome * 0.2;
    let takeHomePay = income - (totalTax + nationalInsurance);
    console.log("Your total income tax to pay is £ " + totalTax);
    console.log("Your total national insurance to pay is £ " + nationalInsurance)
    console.log("Your total take home pay is £ " + takeHomePay);
}


function higherRateIncomeTax(){
    var lowerTax = (50270 - 12571)* 0.2;
    var lowerNI = lowerTax * 0.12
    var higherTax = (income - 50271)* 0.4;
    var higherNI = higherTax * 0.02;
    var totalTax = lowerTax + higherTax;
    var totalNI = lowerNI + higherNI;
    let takeHomePay = income - (totalTax + totalNI);
    console.log("Your total income tax to pay is £ " + totalTax);
    console.log("Your total national insurance to pay is £ " + totalNI);
    console.log("Your total take home pay is £ " + takeHomePay)
}

function highestRateIncomeTax(){
    var lowerTax = (50270 - 12571)* 0.2;
    var lowerNI = lowerTax * 0.12;
    var higherTax = (125140 - 50271)* 0.4;
    var higherNI = (income - 50271) * 0.02;
    var highestTax = (income - 125141)* 0.45;
    var totalTax = lowerTax + higherTax + highestTax;
    console.log("Your total income tax to pay is £ " + totalTax);
    let takeHomePay = income - totalTax;
    console.log("Your total take home pay is £ " + takeHomePay)
}
















    








