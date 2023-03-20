function solve(arr,num){
    let result = [] ;
for(let i = 0 ; i < arr.length ; i+=num){
    result.push(arr[i]) ;
};
return result;
}
solve(['1', '2', '3', '4', '5'], 6)