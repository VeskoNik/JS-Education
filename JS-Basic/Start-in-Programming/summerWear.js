function solve(input){
let degrees = Number(input[0]) ;
let timeOfDay = input[1] ;
let shoes 
let outfit 
if (degrees >= 10 && degrees <= 18) {
    if (timeOfDay === "Morning") {
        shoes = "Sneakers"
        outfit = "Sweatshirt"
    } else if (timeOfDay === "Afternoon" || timeOfDay === "Evening") {
        shoes = "Moccasins"
        outfit = "Shirt"
    }
} else if (degrees > 18 && degrees <=24) {
    if (timeOfDay === "Morning" || timeOfDay === "Evening") {
        shoes = "Moccasins"
        outfit = "Shirt"
    } else if (timeOfDay === "Afternoon") {
        shoes = "Sandals"
        outfit = "T-Shirt"
    }
} else if (degrees >= 25) {
    if (timeOfDay === "Morning") {
        shoes = "Sandals"
        outfit = "T-Shirt"
    } else if (timeOfDay === "Afternoon") {
        shoes = "Barefoot"
        outfit = "Swim Suit"
    } else if (timeOfDay === "Evening") {
        shoes = "Moccasins"
        outfit = "Shirt"
    }
} console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}
solve(["28",
"Evening"])


