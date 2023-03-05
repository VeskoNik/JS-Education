function solve(arr){
let newArr = arr.shift().split('>>')
let carType = ""
let carYears = 0
let carKM = 0
let command = newArr.shift()
let price= 0
let declines = 0 
let increase = 0
let sumPrice = 0
while(command != undefined){
    command = command.split(" ")
    carType = command[0]
    carYears = command[1]
    carKM = command[2]
    if(carType === "family"){
        price+= 50
        declines = Number(carYears) * 5
        price-=declines
        increase = Math.floor(carKM / 3000) * 12
        price+= increase
        console.log(`A ${carType} car will pay ${(price).toFixed(2)} euros in taxes.`);
       
    }else if(carType === 'heavyDuty'){
        price+= 80
        declines = Number(carYears) * 8
        price-=declines
        increase = Math.floor(carKM / 9000) * 14
        price+= increase
        console.log(`A ${carType} car will pay ${(price).toFixed(2)} euros in taxes.`);
        
    }else if(carType === 'sports'){
        price+= 100
        declines = Number(carYears) * 9
        price-=declines
        increase = Math.floor(carKM / 2000) * 18
        price+= increase
        console.log(`A ${carType} car will pay ${(price).toFixed(2)} euros in taxes.`);
       
    }else{
        console.log('Invalid car type.');
    }
    sumPrice+= price
    price = 0
    command = newArr.shift()
}
console.log(`The National Revenue Agency will collect ${(sumPrice).toFixed(2)} euros in taxes.`);
}
solve([ 'family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012' ])