function solve(input){
    let index = 0
    let moneyForVacation = Number(input[index])
    index++
    let startingMoney = Number(input[index])
    index++
    
    let command = "" ;

    let spendDaysCount = 0 ;
   
    let allDayCounter = 0;

    while (startingMoney < moneyForVacation) {
        if (command === "spend") {
            let moneyDecrease = Number(input[index-1])
            startingMoney -= moneyDecrease
            allDayCounter++
            spendDaysCount++
            if(startingMoney < 0) {
                startingMoney = 0 ;
            }

        } else if (command === "save"){
            let moneyIncrease = Number(input[index-1])
            startingMoney += moneyIncrease
            allDayCounter++
            spendDaysCount = 0 ;
        } 
        if (spendDaysCount === 5) {
            console.log("You can't save the money.");
            console.log(`${allDayCounter}`);
            return;
        }
        command = input[index]
        index+= 2
        
    }
console.log(`You saved the money for ${allDayCounter} days.`);

}
solve(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])

