function solve(input){
    let budget = Number(input[0]) ; 
    let statistCount = Number(input[1]) ;
    let statistWear = Number(input[2]) ;
    
    let decor = budget * 0.10 ;

    if (statistCount >= 150) {
        statistWear = statistWear - (statistWear * 0.10)
    }
    let moneyForStatistWear = statistCount * statistWear
    if (decor + moneyForStatistWear > budget) { 
        console.log("Not enough money!");
        console.log(`Wingard needs ${((decor + moneyForStatistWear) - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!")
        console.log(`Wingard starts filming with ${(budget - (decor + moneyForStatistWear)).toFixed(2)} leva left.`)
    }


}
solve(["15437.62","186","57.99"])

// (["15437.62",
// "186",
// "57.99"])

