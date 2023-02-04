function foodDelivery(input){
    let countChickenMenus = Number(input[0])
    let countFishMenus = Number(input[1])
    let countVeganMenus = Number(input[2])

    let delivery = 2.50
    let moneyForChickenMenus = countChickenMenus * 10.35
    let moneyForFishMenus = countFishMenus * 12.40
    let moneyForVeganMenus = countVeganMenus * 8.15
    let moneyForAllMenus = moneyForChickenMenus + moneyForFishMenus + moneyForVeganMenus
    let moneyForDesert = moneyForAllMenus * (20 / 100)
    let total = moneyForAllMenus + moneyForDesert + delivery
    console.log(total)
}
foodDelivery(["9 ",
"2 ",
"6 "]

)