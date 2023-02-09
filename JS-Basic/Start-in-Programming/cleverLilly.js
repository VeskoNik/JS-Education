function solve(input) {
    let age = Number(input[0])
    let WashingMachinePrice = Number(input[1])
    let pricePerToy = Number(input[2])
    let moneyPerBirthday = 10 ; 
    let moneyBirthdayTotal = 0 ;
    let toysMoney = 0 ;
    let totalMoney = 0;

    for (i = 1 ; i <= age ; i++) { 
        if ( i % 2 === 0) { 
            moneyBirthdayTotal += moneyPerBirthday - 1
            moneyPerBirthday += 10
            } else {
                toysMoney += pricePerToy 
            }
    } 
    totalMoney = toysMoney + moneyBirthdayTotal
    if (totalMoney >= WashingMachinePrice) { 
        let n = totalMoney - WashingMachinePrice
        console.log(`Yes! ${n.toFixed(2)}`);
    } else {
        let m = WashingMachinePrice - totalMoney
        console.log(`No! ${m.toFixed(2)}`);
    }
} 
solve(["21",

"1570.98",

"3"])