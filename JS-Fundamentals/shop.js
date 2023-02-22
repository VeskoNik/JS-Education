function solve(shop,delivery){
for(let i = 1; i< delivery.length ; i+=2){
    let product = delivery[i-1]
    let qty = Number(delivery[i])
   if(shop.includes(product)){
    let a =Number(shop[(shop.indexOf(product)+1)])
    shop[(shop.indexOf(product)+1)] = a+qty
   }else{
    shop.push(product)
    shop.push(qty)
   }
}
    for(let j = 1 ; j < shop.length ; j+=2){
        console.log(`${shop[j-1]} -> ${shop[j]}`);
    }
}
solve([

    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    
    ],
    
    [
    
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    
    'Tomatoes', '70', 'Bananas', '30'
    
    ])