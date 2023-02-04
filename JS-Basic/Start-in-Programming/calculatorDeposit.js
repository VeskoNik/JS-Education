function calculatorDeposit(input){
    //1.	Депозирана сума – реално число в интервала [100.00 … 10000.00]
    //2.	Срок на депозита (в месеци) – цяло число в интервала [1…12]
    //3.	Годишен лихвен процент – реално число в интервала [0.00 …100.00]
    let depositAmount = Number(input[0])
    let termDeposit = Number(input[1])
    let interestRate = Number(input[2])
    let sum = depositAmount * (interestRate / 100)
    let sum2 = sum / 12
    let sum3 = sum2 * termDeposit
    let sum4 = sum3 + depositAmount
    console.log(sum4)
}

calculatorDeposit(["200" ,
"3",
"5.7"
 
])