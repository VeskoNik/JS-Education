function solve(input){
    let month = input[0]
    let nightsCount = Number(input[1])

    let apartmentPrice = 0 ;
    let studioPrice = 0 ;
    if (month === "May" || month === "October") {
        apartmentPrice = nightsCount  * 65
        studioPrice = nightsCount * 50
        if (nightsCount > 7 && nightsCount < 14) {
            studioPrice = studioPrice * 0.95
        } else if (nightsCount > 14) {
            studioPrice = studioPrice * 0.70
            apartmentPrice = apartmentPrice * 0.90
        }
    } else if (month === "June" || month === "September") {
        apartmentPrice = nightsCount * 68.70
        studioPrice = nightsCount * 75.20
        if (nightsCount > 14) {
            apartmentPrice = apartmentPrice * 0.90
            studioPrice = studioPrice * 0.80
        }
    } else if (month === "July" || month === "August") {
        apartmentPrice = 77 * nightsCount 
        studioPrice = 76 * nightsCount 
        if (nightsCount > 14) {
            apartmentPrice = apartmentPrice * 0.90
        }
    } console.log(`Apartment: ${(apartmentPrice).toFixed(2)} lv.`);
      console.log(`Studio: ${(studioPrice).toFixed(2)} lv.`);
}
solve(["June",
"13"])
