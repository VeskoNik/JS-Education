function solve(arr){
let index = 0
let command = arr[index]
let priceSumWithoutTax = 0
let priceSumWithTax = 0
let totalPriceWithSpecial = 0
let taxes = 0
index++
while (command !== 'special' && command !== 'regular') {
    
    let partPrice = Number(command)
    if(partPrice < 0){
        console.log('Invalid price!');
    }else{
    priceSumWithoutTax += partPrice
    }
    command = arr[index]
    index++
}
priceSumWithTax = priceSumWithoutTax * 1.20
taxes = priceSumWithTax - priceSumWithoutTax
if(arr.includes('special')){
    totalPriceWithSpecial = priceSumWithTax * 0.90
    if(totalPriceWithSpecial === 0){
        console.log("Invalid order!");
    }else{
        console.log(`Congratulations you've just bought a new computer!
        Price without taxes: ${(priceSumWithoutTax).toFixed(2)}$
        Taxes: ${(taxes).toFixed(2)}$
        -----------
        Total price: ${(totalPriceWithSpecial).toFixed(2)}$
        `);
    }
}else{ 
    if(priceSumWithTax === 0){
        console.log('Invalid order!');
    }else{
    console.log(`Congratulations you've just bought a new computer!
    Price without taxes: ${(priceSumWithoutTax).toFixed(2)}$
    Taxes: ${(taxes).toFixed(2)}$
    -----------
    Total price: ${(priceSumWithTax).toFixed(2)}$
    `);
 }
}
}
solve([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ])
    
    