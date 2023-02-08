function solve(input){
let budget = Number(input[0])
let season = input[1]
let fishmenCount = Number(input[2])
 
let price = 0 ; 

if (season === "Spring") { 
    price = 3000 ;
    if (fishmenCount <= 6) {
        price = price * 0.90
    } else if (fishmenCount >= 7 && fishmenCount <= 11) {
        price = price * 0.85
    } else {
        price = price * 0.75
    }
} else if (season === "Summer" || season === "Autumn") {
    price = 4200 ;
    if (fishmenCount <= 6) {
        price = price * 0.90
    } else if (fishmenCount >= 7 && fishmenCount <= 11) {
        price = price * 0.85
    } else {
        price = price * 0.75
    }
} else if (season === "Winter") {
    price = 2600 ;
    if (fishmenCount <= 6) {
        price = price * 0.90
    } else if (fishmenCount >= 7 && fishmenCount <= 11) {
        price = price * 0.85
    } else {
        price = price * 0.75
    }
} if (season != "Autumn" && fishmenCount % 2 === 0) {
    price = price * 0.95
} 
if (budget >= price) {
    console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
} else {
    console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`);
}
}
solve(["2000",
"Winter",
"13"])



