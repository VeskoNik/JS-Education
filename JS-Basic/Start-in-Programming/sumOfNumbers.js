function solve(input){
    let number = String(input[0])
    let result = 0 ;
    for (let i = 0; i < number.length; i++) {
       result += Number(number[i])
    } console.log(`The sum of the digits is:${result}`);
} 
solve(["1234"])