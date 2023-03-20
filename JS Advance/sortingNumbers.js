function solve(arr){
    arr = arr.sort((a,b) => a-b)
    let resultArr = []
    while(arr.length != 0){
        resultArr.push(arr.shift())
        resultArr.push(arr.pop())
    }
    return resultArr;
}
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))