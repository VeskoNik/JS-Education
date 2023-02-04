function basketballEqt(input){
    let tax = Number(input[0])

    let basketShoes = tax - ( tax * (40 / 100))
    let basketSuit = basketShoes - (basketShoes * (20 / 100))
    let ball = basketSuit / 4
    let access = ball / 5
    let total = basketShoes + basketSuit + ball + access + tax
    console.log(total)
}
basketballEqt(["365 "])