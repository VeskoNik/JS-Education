function solve(arr,num){
for(let i = 0 ; i<num; i++){
    arr.unshift(arr.pop())
}
console.log(arr.join(' '));
}
solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15)