function solve(number){
    let sumOdd = 0
    let oddNum = 1
    for (let i = 0 ; i < number ; i++) {
        console.log(oddNum);
        sumOdd += oddNum
        oddNum += 2
        
    }
    console.log(`Sum: ${sumOdd}`);
}
solve(5)