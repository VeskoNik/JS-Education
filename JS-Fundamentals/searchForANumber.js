function solve(firstArr,secondArr){
let takingNums = secondArr.shift()
let numsToDelete = secondArr.shift()
let searchingNum = secondArr.shift()
let resultArr = firstArr.splice(0,takingNums)
resultArr.splice(0,numsToDelete)
let indexOfSearchingNum = resultArr.indexOf(searchingNum)
let counter = 0
while(indexOfSearchingNum >= 0){
    counter++
    resultArr.splice(indexOfSearchingNum,1)
    indexOfSearchingNum = resultArr.indexOf(searchingNum)
}
console.log(`Number ${searchingNum} occurs ${counter} times.`);
}
solve([7, 1, 5, 8, 2, 7],

    [3, 1, 5])