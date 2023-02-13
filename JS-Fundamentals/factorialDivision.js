function solve(firstNum , secondNum){
    for (let i = firstNum-1; i > 0 ; i--) {
        firstNum*=i
    }
    for(let y = secondNum -1 ; y >0 ;y--){
        secondNum*= y 
    }
    console.log((firstNum/ secondNum).toFixed(2));
}

solve(5,
    2
    )