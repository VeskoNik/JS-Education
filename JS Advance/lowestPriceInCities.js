function solve(arr){
const obj = {};
for (const line of arr) {
    let[townName,product,price] = line.split(' | ');
    price = Number(price);
    if(!obj[product]){
        obj[product] = {townName,price}
    }else if(obj[product].price > price){
        obj[product]= {townName,price}
    }
}
for (const el in obj) {
    console.log(`${el} -> ${obj[el].price} (${obj[el].townName})`);
}
}
solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
   'Sofia City | Mitsubishi | 10000',
   'Sofia City | Mercedes | 10000',
   'Sofia City | NoOffenseToCarLovers | 0',
  'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
   'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000']
)