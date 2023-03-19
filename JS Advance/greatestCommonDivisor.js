function solve(num1, num2){
let length = Math.min(num1,num2)
let result = 0
for(let i = 1 ; i <= length ;i++){
    if(num1 % i === 0 && num2 % i === 0){
        result = i
    }
}
console.log(result);
}
solve(2154,458)