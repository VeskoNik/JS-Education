function solve(arr){
    let firstNum = Number(arr.shift())
    let lastNum = Number(arr.pop())
    console.log(firstNum + lastNum);
}
solve(['20', '30', '40'])