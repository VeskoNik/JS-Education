function repainting(input){
    let countNylon = Number(input[0])
    let countPaintLitres = Number(input[1])
    let thinner = Number(input[2])
    let hoursToComplete = Number(input[3])
    
    let addNylon =  2 ; 
    let addPaint = countPaintLitres * 0.1 ; 
    let moneyForAllPaint = (countPaintLitres + addPaint) * 14.5 ; 
    let moneyForAllNylon = (countNylon + addNylon) * 1.50 ;
    let moneyForThinner = thinner * 5 ; 
    let moneyForBags = 0.40 ; 
    let allMoneyMatterials = moneyForAllNylon + moneyForAllPaint + moneyForThinner + moneyForBags ;
    let workForOneHour = allMoneyMatterials * 0.30
    let moneyForWorkers = hoursToComplete * workForOneHour
    let total = moneyForWorkers + allMoneyMatterials
    console.log(total)


}
repainting(["5 ",
"10 ",
"10 ",
"1 "]

)