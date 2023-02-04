function suppliesForSchool(input){
    let countPacPens = Number(input[0])
    let countPacMarkers = Number(input[1])
    let litresLiquidForCleaning = Number(input[2])
    let percentDiscount = Number(input[3])
    let moneyForPens = countPacPens * 5.80
    let moneyForMarkers = countPacMarkers * 7.20
    let moneyForSoap = litresLiquidForCleaning * 1.20
    let allMoney = moneyForPens + moneyForMarkers + moneyForSoap
    let totalMoneyWithDiscount = allMoney - (allMoney * (percentDiscount / 100))
    console.log(totalMoneyWithDiscount)
} 
suppliesForSchool(["2 ",
"3 ",
"4 ",
"25 "]
)