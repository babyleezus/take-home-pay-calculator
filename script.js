// var timePeriod = document.getElementsByName("time-period")

var income = document.getElementById("income")
var pensionOption = document.getElementsByName("pension-option")

// var pensionContribution = document.getElementById("pension-contribution")

// var studentLoan = document.getElementsByName("student-loan-option")

// var studentLoanContribution = document.getElementById("student-loan-contribution")

var income;

function noIncomeTax (){
    if(income <= 12570);{
    console.log("You have no income tax to pay")}
}
noIncomeTax();

income = 30000

function lowerRateIncomeTax(){
    let taxableIncome = income - 12750;
    let totalTax = taxableIncome * 0.2;
    let takeHomePay = income - totalTax;
    console.log("Your total income tax to pay is £ " + totalTax);
    console.log("Your total take home pay is £ " + takeHomePay);
}

lowerRateIncomeTax()

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







//function enterValidInput();
    

/*} else if (income > 12571 && income <= 50270){
             
        } else if (income > 50271 && income <= 125140){ 
             var midTax = income - 50270
             var midTax = midTax * 0.4 
             let totalTax = midTax + ((50270 - 12571)* 0.2)
             console.log("Your total take home pay is £ " + totalTax)
            
        } else (income > 125141); {
            var upperTax = income - 125141;
            var upperTax = upperTax * 0.45;
            var midTax = ((125140 - 50271)* 0.4)
            var lowTax = ((50270 - 12571)* 0.2)
            var totalTax = upperTax + midTax + lowTax;
            console.log("Your total take home pay is £ " + totalTax) 
        
        }
    }

*/


