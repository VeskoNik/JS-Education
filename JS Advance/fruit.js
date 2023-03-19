function solve(fruit,grams,price){
    const kilograms = grams / 1000
    const finalPrice = kilograms * price
    return `I need $${finalPrice.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`
}
solve('orange', 2500, 1.80)