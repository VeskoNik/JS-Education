function solve(input){
let flowersType = input[0]
let flowersCount = Number(input[1])
let budget = Number(input[2])

let rosesPrice = flowersCount * 5 ;
let dahliasPrice = flowersCount * 3.80 ;
let tulipsPrice = flowersCount * 2.80 ; 
let narcissusPrice = flowersCount * 3 ;
let gladiolusPrice = flowersCount * 2.50 ;
let priceWithDiscount = 0 ;
if (flowersType === "Roses") {
    if (flowersCount > 80) {
        priceWithDiscount = rosesPrice * 0.9 
        if (budget >= priceWithDiscount) {
            console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${(budget - priceWithDiscount).toFixed(2)} leva left.`);
        } else {
            console.log(`Not enough money, you need ${(priceWithDiscount - budget).toFixed(2)} leva more.`);
        }
    } else {
        if (budget >= rosesPrice) {
            console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${(budget - rosesPrice).toFixed(2)} leva left.`);

        } else {
            console.log(`Not enough money, you need ${(rosesPrice - budget).toFixed(2)} leva more.`)
        }
    }
} else if (flowersType === "Dahlias") {
    if (flowersCount > 90) {
        priceWithDiscount = dahliasPrice * 0.85 
        if (budget >= priceWithDiscount) {
            console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${(budget - priceWithDiscount).toFixed(2)} leva left.`);
        } else {
            console.log(`Not enough money, you need ${(priceWithDiscount - budget).toFixed(2)} leva more.`);
        }
    } else {
        if (budget >= dahliasPrice) {
            console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${(budget - dahliasPrice).toFixed(2)} leva left.`);

        } else {
            console.log(`Not enough money, you need ${(dahliasPrice - budget).toFixed(2)} leva more.`)
        }
    }
} else if (flowersType === "Tulips") {
    if (flowersCount > 80) {
        priceWithDiscount = tulipsPrice * 0.85 
        if (budget >= priceWithDiscount) {
            console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${(budget - priceWithDiscount).toFixed(2)} leva left.`);
        } else {
            console.log(`Not enough money, you need ${(priceWithDiscount - budget).toFixed(2)} leva more.`);
        }
    } else {
        if (budget >= tulipsPrice) {
            console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${(budget - tulipsPrice).toFixed(2)} leva left.`);

        } else {
            console.log(`Not enough money, you need ${(tulipsPrice - budget).toFixed(2)} leva more.`)
        }
    }
} else if (flowersType === "Narcissus") { 
    if (flowersCount < 120) {
        priceWithDiscount = narcissusPrice * 1.15 
        if (budget >= priceWithDiscount) {
            console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${(budget - priceWithDiscount).toFixed(2)} leva left.`);
        } else {
            console.log(`Not enough money, you need ${(priceWithDiscount - budget).toFixed(2)} leva more.`);
        }
    } else {
        if (budget >= narcissusPrice) {
            console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${(budget - narcissusPrice).toFixed(2)} leva left.`);

        } else {
            console.log(`Not enough money, you need ${(narcissusPrice - budget).toFixed(2)} leva more.`)
        }
    }
} else if (flowersType === "Gladiolus") {
    if (flowersCount < 80) {
        priceWithDiscount = gladiolusPrice * 1.20 
        if (budget >= priceWithDiscount) {
            console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${(budget - priceWithDiscount).toFixed(2)} leva left.`);
        } else {
            console.log(`Not enough money, you need ${(priceWithDiscount - budget).toFixed(2)} leva more.`);
        }
    } else {
        if (budget >= gladiolusPrice) {
            console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${(budget - gladiolusPrice).toFixed(2)} leva left.`);

        } else {
            console.log(`Not enough money, you need ${(gladiolusPrice - budget).toFixed(2)} leva more.`)
        }
    }
}
}
solve(["Gladiolus",
"64",
"160"])



