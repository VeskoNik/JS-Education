function solve (num1 , num2) {
    if (num2 > 15) {
        num2 = 15
    }
    let percision = parseFloat((num1).toFixed(num2))
    console.log(percision);
}
solve (10.5,3)