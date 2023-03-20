function solve(arr){
    let firstNum = arr.shift();
let result = [firstNum];
for (const el of arr) {
    if(Number(el)>= firstNum){
        firstNum = Number(el)
        result.push(firstNum)
    }
}
return result;
}
solve([1,3,8,4,10, 12, 3, 2, 24])