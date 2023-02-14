function solve(firstArr, secondArr){
    let specialNumber = secondArr[0]
    let power = secondArr[1]
    let result = 0
    for(let i = 0 ; i<firstArr.length ; i ++){
    if(firstArr.includes(specialNumber)){
        let index = (firstArr.indexOf(specialNumber)) - power
        if(index < 0){
            firstArr.reverse()
            let newIndex = firstArr.length - (power - Math.abs(index))
            firstArr.splice(newIndex,power)
            index = 0
            firstArr.reverse()
            firstArr.splice(index,power+1)
        }else{
        firstArr.splice(index,((power * 2)+1))
        }
    }
}
    for (const num of firstArr) {
            result+= num
    }
console.log(result);
}
solve([1, 2, 1, 1, 1, 1,

    2, 1, 1, 1],
    
    [2, 4])