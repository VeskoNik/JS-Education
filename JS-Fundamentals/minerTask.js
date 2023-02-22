function solve(arr){
let result = {}
for(let i = 0 ; i<arr.length ; i+=2){
    let quantity = Number(arr[i+1])
    let item = arr[i]
    if(!result.hasOwnProperty(item)){
        result[item] = quantity
    }else{
        result[item]+= quantity
    }
}
for (const key in result) {
    console.log(`${key} -> ${result[key]}`);

}
}
solve([ 'gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ])