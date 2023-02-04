function greenGrass(input){
    let m2 = Number(input[0])
    let money = m2 * 7.61
    let discount = money * 0.18
    let overall = money - discount
    let str = `The final price is: ${overall} lv.`
    let string = `The discount is: ${discount} lv.`
    console.log(str)
    console.log(string)
}
greenGrass([550])