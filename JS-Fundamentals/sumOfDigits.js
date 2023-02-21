function solve (number) {
    let numTostring = number.toString() ;
    let sumNumber = 0 
    for( let i = 0 ; i < numTostring.length ; i++) {
        let currentNum = Number(numTostring[i])
        sumNumber += currentNum
    }
    console.log(sumNumber);
}
solve(245678)