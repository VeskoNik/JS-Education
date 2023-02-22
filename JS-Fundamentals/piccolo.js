function solve(arr){
    let newObj = {}
let newLine = arr.shift().split(', ')
while(newLine !== undefined){
    let command = newLine[0]
    let carNumber = newLine[1]
    if(command === "IN"){
        newObj[carNumber] = 'IN'

    }else if(command === 'OUT'){
        delete newObj[carNumber]
    }

    if(arr.length> 0){
    newLine =arr.shift().split(', ')
    }else{break;}
}
let sort = Object.entries(newObj).sort((a,b)=> a[0].localeCompare(b[0])) 
if(sort.length>0){
    for (const kvp of sort) {
        console.log(kvp[0]);   
    }
}else{console.log('Parking Lot is Empty')}
}
solve(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'IN, CA9999TT',

'IN, CA2866HI',

'OUT, CA1234TA',

'IN, CA2844AA',

'OUT, CA2866HI',

'IN, CA9876HH',

'IN, CA2822UU'])