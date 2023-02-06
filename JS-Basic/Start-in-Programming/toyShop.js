function toyShop(input) {
    let holidayPrice = Number(input[0])
    let puzzleCount = Number(input[1])
    let dollsCount = Number(input[2])
    let bearCount = Number(input[3])
    let minionsCount = Number(input[4])
    let truckCount = Number(input[5])

    let puzzleCountPrice = puzzleCount * 2.60
    let dollsCountPrice = dollsCount * 3
    let bearCountPrice = bearCount * 4.10
    let minionsCountPrice = minionsCount * 8.20
    let truckCountPrice = truckCount * 2
    
    let totalToyPrice = puzzleCountPrice + dollsCountPrice + bearCountPrice + minionsCountPrice + truckCountPrice
    let totalCount = puzzleCount + dollsCount + bearCount + minionsCount + truckCount

    if (totalCount >= 50) {
        let discount = totalToyPrice * (25/100)
        totalToyPrice = totalToyPrice - discount
        
    }
        let rent = totalToyPrice * (10/100)
        totalToyPrice = totalToyPrice - rent

        if (totalToyPrice >= holidayPrice) { 

            console.log(`Yes! ${(totalToyPrice - holidayPrice).toFixed(2)} lv left.`)
        } else {
            console.log(`Not enough money! ${(holidayPrice - totalToyPrice).toFixed(2)} lv needed.`)
        }
}
toyShop(["320", "8", "2", "5", "5", "1"])
// toyShop(["40.8", "20", "25", "30", "50", "10"])