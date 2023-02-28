function solve(arr){
let pattern = /%([A-Z][a-z]+)%[^%|$.]*<(\w+)>[^%|$.]*\|([0-9]+)\|[^0-9%|$.]*([0-9]*\.?[0-9]+)\$/g 
let command = arr.shift()
let result = {}
let totalSum = 0
while(command !== 'end of shift'){
    let match = command.matchAll(pattern)
    for (const el of match) {
        let name = el[1]
        let product = el[2]
        let count = Number(el[3])
        let price = Number(el[4])
        let totalPrice = price * count
        totalSum+= price*count
        console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
    }
    command = arr.shift()
}
console.log(`Total income: ${totalSum.toFixed(2)}`);
}
solve(['%George%<Croissant>|2|10.3$',

'%Peter%<Gum>|1|1.3$',

'%Maria%<Cola>|1|2.4$',

'end of shift'])