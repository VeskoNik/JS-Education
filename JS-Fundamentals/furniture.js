function solve(arr){
    let pattern = />>([A-Z][A-Za-z]+)<<([0-9]+\.?[0-9]+)!([0-9]+)/g
    let command = arr.shift()
    let sumMoney = 0
    let boughtFurniture = []
    while(command != 'Purchase') {
        let match = command.matchAll(pattern)
        for (const el of match) {
            boughtFurniture.push(el[1])
            sumMoney+= Number(el[2]) * Number(el[3])
        }
        command = arr.shift()
    }
    if(boughtFurniture.length > 0){
    console.log(`Bought furniture:`);
    for (const element of boughtFurniture) {
        console.log(element);
    }
    console.log(`Total money spend: ${sumMoney.toFixed(2)}`);
    }else{
        console.log(`Bought furniture:`);
        console.log(`Total money spend: ${sumMoney.toFixed(2)}`);
    }
}
solve(['>>Laptop<<312.2323!3',

'>>TV<<300.21314!5',

'>Invalid<<!5',

'>>TV<<300.21314!20',

'>>Invalid<!5',

'>>TV<<30.21314!5',

'>>Invalid<<!!5',

'Purchase'])