function solve(number){
    let numberToString = number.toString()
    let evenSum = 0
    let oddSum = 0
    for(let i = 0 ; i < numberToString.length ; i++){
        let stringToNumber = Number(numberToString[i])
        
        if(stringToNumber % 2 === 0 ){
            evenSum+= stringToNumber
        }else {
            oddSum+= stringToNumber
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

 
}
solve(1000435)