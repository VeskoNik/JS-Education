function solve(input){
    let budget = Number(input[0])
    let season = input[1]
    
    let destination
    let price = 0 ;
    let holiday 
    if (budget <= 100) { 
        destination = "Bulgaria"
        if (season === "summer") {
            price = budget * 0.70
            holiday = "Camp"
        } else if (season === "winter") {
            price = budget * 0.30
            holiday = "Hotel"
        }
    } else if (budget > 100 && budget <= 1000) {
        destination = "Balkans" 
        if (season === "summer") {
            price = budget * 0.60
            holiday = "Camp"
        } else if (season === "winter") {
            price = budget * 0.20
            holiday = "Hotel"
        }
    } else {
        destination = "Europe"
        price = budget * 0.10
        holiday = "Hotel"
    } console.log(`Somewhere in ${destination}`);
    console.log(`${holiday} - ${(budget - price).toFixed(2)}`);

}
solve(["1500", "summer"])