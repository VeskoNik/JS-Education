function solve(input){
    let budget = Number(input[0]) ;
    let N = Number(input[1]) ;
    let M = Number(input[2]) ;
    let P = Number(input[3]) ;

    let moneyN = N * 250 ;
    let moneyM = M * (moneyN * 0.35) ;
    let moneyP = P * (moneyN * 0.10) ;
    
    let totalMoney = moneyN + moneyM + moneyP ;

    if (N > M) {
        let discount = totalMoney * 0.15 ;
        totalMoney = totalMoney - discount ;
    }
    if (budget >= totalMoney) {
        console.log(`You have ${(budget - totalMoney).toFixed(2)} leva left!`) ;
    } else {
        console.log(`Not enough money! You need ${(totalMoney - budget).toFixed(2)} leva more!`);
    }


}
solve(["900" , "2" , "1" , "3"])
