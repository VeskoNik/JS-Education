function solve(arr){
    let newArr = [] ; 
    let sortArr = arr.sort((a,b) => a-b)
    for(let i = 0 ; i < arr.length+3 ;i++){
    let biggestNum =  sortArr.pop()
    let smallestNum = sortArr.shift()
    newArr.push(biggestNum)
    newArr.push(smallestNum)
    }
    console.log(newArr.join(' '));
}
solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])