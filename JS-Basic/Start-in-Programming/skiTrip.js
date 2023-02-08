function solve(input){
    let days = Number(input[0])
    let typeSpace = input[1]
    let mood = input[2]

    let nights = days - 1
    let roomForOnePerson = nights * 18
    let apartment = nights * 25
    let presidentApartment = nights * 35
    discount = 0 ;
    let total = 0
    if (typeSpace === "room for one person" && days <=365 && mood === "positive") {
        total = roomForOnePerson * 1.25
        console.log((total).toFixed(2));
    } else if (typeSpace === "room for one person" && days <=365 && mood === "negative") {
        total = roomForOnePerson * 0.90
    } else if (typeSpace === "apartment" && days < 10)  {
        if (mood === "positive") {
            discount = apartment * 0.30
            total = (apartment - discount) * 1.25
            console.log((total).toFixed(2));
        } else {
            discount = apartment * 0.30
            total = (apartment - discount) * 0.90
            console.log((total).toFixed(2));
        }
    } else if (typeSpace === "apartment" && days === 10 && days <=15)  {
        if (mood === "positive") {
            discount = apartment * 0.35
            total = (apartment - discount) * 1.25
            console.log((total).toFixed(2));
        } else {
            discount = apartment * 0.35
            total = (apartment - discount) * 0.90
            console.log((total).toFixed(2));
        }
    } else if (typeSpace === "apartment" && days > 15)  {
        if (mood === "positive") {
            discount = apartment * 0.50
            total = (apartment - discount) * 1.25
            console.log((total).toFixed(2));
        } else {
            discount = apartment * 0.50
            total = (apartment - discount) * 0.90
            console.log((total).toFixed(2));
        }
    } else if (typeSpace === "president apartment" && days < 10) {
        if (mood === "positive") {
            discount = presidentApartment * 0.10
            total = (presidentApartment - discount) * 1.25
            console.log((total).toFixed(2));
        } else {
            discount = presidentApartment * 0.10
            total = (presidentApartment - discount) * 0.90
            console.log((total).toFixed(2));
        }
    } else if (typeSpace === "president apartment" && days >= 10 && days <=15) {
        if (mood === "positive") {
            discount = presidentApartment * 0.15
            total = (presidentApartment - discount) * 1.25
            console.log((total).toFixed(2));
        } else {
            discount = presidentApartment * 0.15
            total = (presidentApartment - discount) * 0.90
            console.log((total).toFixed(2));
        }
    } else if (typeSpace === "president apartment" && days > 15) {
        if (mood === "positive") {
            discount = presidentApartment * 0.20
            total = (presidentApartment - discount) * 1.25
            console.log((total).toFixed(2));
        } else {
            discount = presidentApartment * 0.20
            total = (presidentApartment - discount) * 0.90
            console.log((total).toFixed(2));
        }
    }
}
solve(["2",
"apartment",
"positive"])

