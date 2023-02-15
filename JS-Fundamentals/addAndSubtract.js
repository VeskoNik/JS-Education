function solve (arr) {
    let modifiedArr = [];
    let resultSumOriginalArr = 0 ;
    let resultSumModifiedArr = 0 ;
    for (let i = 0 ; i < arr.length ; i++ ) {
        let evenNum = arr[i] + i 
        let oddNum = arr[i] - i
        resultSumOriginalArr += arr[i]
        
        if (arr[i] % 2 === 0 ) {
            modifiedArr.push(evenNum)

        }else {
            modifiedArr.push(oddNum)
        }
    
    }
    for (let k = 0 ; k < modifiedArr.length ; k++) {
        resultSumModifiedArr+= modifiedArr[k]
    }
    console.log(modifiedArr);
    console.log(resultSumOriginalArr);
    console.log(resultSumModifiedArr);
}
solve([5, 15, 23, 56, 35])