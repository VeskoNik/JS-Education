function solve(input){
let product = input[0]
let town = input[1]
let qty = Number(input[2])

let price = 0 ;
if (town === "Sofia") { 
    if (product === "coffee") {
        price = qty * 0.50
        console.log(price);
    } else if (product === "water") {
        price = qty * 0.80
        console.log(price);
    } else if (product === "beer"){
        price = qty * 1.20
        console.log(price);
    } else if(product === "sweets") {
        price = qty * 1.45
        console.log(price);
    } else if (product === "peanuts") {
        price = qty * 1.60
        console.log(price);
    }
} else if (town === "Plovdiv") {
    if (product === "coffee") {
        price = qty * 0.40
        console.log(price);
    } else if (product === "water") {
        price = qty * 0.70
        console.log(price);
    } else if (product === "beer"){
        price = qty * 1.15
        console.log(price);
    } else if(product === "sweets") {
        price = qty * 1.30
        console.log(price);
    } else if (product === "peanuts") {
        price = qty * 1.50
        console.log(price);
    }
} else if (town === "Varna") {
    if (product === "coffee") {
        price = qty * 0.45
        console.log(price);
    } else if (product === "water") {
        price = qty * 0.70
        console.log(price);
    } else if (product === "beer"){
        price = qty * 1.10
        console.log(price);
    } else if(product === "sweets") {
        price = qty * 1.35
        console.log(price);
    } else if (product === "peanuts") {
        price = qty * 1.55
        console.log(price);
    }
}
}
solve(["sweets", "Sofia", "2.23"])