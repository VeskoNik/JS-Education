function solve(num1 , num2) {
    let sum = 0 ;
    plus = ''
    for (let i = num1 ; i <= num2 ; i++) {
        plus += `${i} `
        sum += i
    } console.log(plus);
      console.log(`Sum: ${sum}`);
    

}
solve(5, 10)